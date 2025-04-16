const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();
const Conversation = require('../models/Conversation');
const User = require('../models/User');
const Message = require('../models/Message');

// Base URL for the backend (adjust based on your environment)
const BASE_URL = process.env.BASE_URL || 'http://localhost:8000';

// Get all conversations for a user
router.get('/conversations/:userId', protect, async (req, res) => {
  try {
    const { userId } = req.params;
    const conversations = await Conversation.find({ participants: userId })
      .populate('participants', 'fullName email profileImageUrl lastSeen') // Include lastSeen
      .populate({
        path: 'lastMessage',
        select: 'text timestamp sender',
        populate: {
          path: 'sender',
          select: 'fullName'
        }
      });

    // Prepend BASE_URL to profileImageUrl for each participant
    const updatedConversations = conversations.map(conv => {
      conv.participants = conv.participants.map(participant => {
        if (participant.profileImageUrl) {
          participant.profileImageUrl = `${BASE_URL}${participant.profileImageUrl}`;
        }
        return participant;
      });
      return conv.toObject();
    });

    console.log('Fetched conversations:', updatedConversations);
    res.status(200).json(updatedConversations);
  } catch (error) {
    console.error('Error fetching conversations:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new conversation
router.post('/conversations', protect, async (req, res) => {
  try {
    const conversation = new Conversation(req.body);
    await conversation.save();
    await conversation.populate('participants', 'fullName email profileImageUrl lastSeen'); // Include lastSeen
    
    // Prepend BASE_URL to profileImageUrl for each participant
    conversation.participants = conversation.participants.map(participant => {
      if (participant.profileImageUrl) {
        participant.profileImageUrl = `${BASE_URL}${participant.profileImageUrl}`;
      }
      return participant;
    });

    res.status(201).json(conversation);
  } catch (error) {
    console.error('Error creating conversation:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all users (excluding the logged-in user)
router.get('/users', protect, async (req, res) => {
  try {
    const users = await User.find({ _id: { $ne: req.user._id } }).select('fullName email profileImageUrl lastSeen'); // Include lastSeen
    
    // Prepend BASE_URL to profileImageUrl for each user
    const updatedUsers = users.map(user => {
      if (user.profileImageUrl) {
        user.profileImageUrl = `${BASE_URL}${user.profileImageUrl}`;
      }
      return user.toObject();
    });

    res.status(200).json(updatedUsers);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new message
router.post('/messages', protect, async (req, res) => {
  try {
    const { conversationId, sender, text, timestamp } = req.body;

    // Validate required fields
    if (!conversationId || !sender || !text) {
      return res.status(400).json({ message: 'conversationId, sender, and text are required' });
    }

    // Verify the sender exists and update lastSeen
    const user = await User.findById(sender);
    if (!user) {
      return res.status(400).json({ message: 'Invalid sender ID' });
    }
    user.lastSeen = new Date();
    await user.save();

    const message = new Message({ conversationId, sender, text, timestamp });
    await message.save();

    // Populate the sender field before returning the message
    await message.populate('sender', 'fullName profileImageUrl lastSeen'); // Include lastSeen
    
    // Prepend BASE_URL to profileImageUrl for the sender
    if (message.sender.profileImageUrl) {
      message.sender.profileImageUrl = `${BASE_URL}${message.sender.profileImageUrl}`;
    }

    const updatedConversation = await Conversation.findByIdAndUpdate(
      conversationId,
      { lastMessage: message._id },
      { new: true }
    );

    if (!updatedConversation) {
      console.error('Conversation not found for ID:', conversationId);
      return res.status(404).json({ message: 'Conversation not found' });
    }

    console.log('Updated conversation with lastMessage:', updatedConversation);
    res.status(201).json(message);
  } catch (error) {
    console.error('Error creating message:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get messages for a conversation
router.get('/messages/:conversationId', async (req, res) => {
  try {
    const messages = await Message.find({ conversationId: req.params.conversationId })
      .populate('sender', 'fullName profileImageUrl lastSeen'); // Include lastSeen
    
    // Prepend BASE_URL to profileImageUrl for each sender
    const updatedMessages = messages.map(msg => {
      if (msg.sender.profileImageUrl) {
        msg.sender.profileImageUrl = `${BASE_URL}${msg.sender.profileImageUrl}`;
      }
      return msg.toObject();
    });

    res.status(200).json(updatedMessages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;