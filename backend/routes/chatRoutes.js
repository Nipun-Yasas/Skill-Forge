const express = require("express");
const mongoose = require("mongoose");
const { protect } = require("../middleware/authMiddleware"); // Import the protect middleware

const router = express.Router();

// Test route
router.get("/test", (req, res) => {
  res.status(200).json({ message: "Test route working" });
});

// Route for creating conversations
router.post("/conversations", async (req, res) => {
  try {
    const conversations = Array.isArray(req.body) ? req.body : [req.body];
    const Conversation = require("../models/Conversation");
    const createdConversations = [];

    for (const convData of conversations) {
      const { _id, participants, lastMessage } = convData;

      if (
        !_id ||
        !participants ||
        !Array.isArray(participants) ||
        participants.length < 2
      ) {
        return res.status(400).json({ message: "Invalid conversation data" });
      }

      const conversation = new Conversation({
        _id,
        participants,
        lastMessage,
      });

      await conversation.save();
      createdConversations.push(conversation);
    }

    res.status(201).json(createdConversations);
  } catch (error) {
    console.error("Error creating conversations:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Route for fetching conversations
router.get("/conversations/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const Conversation = require("../models/Conversation");
    const User = require("../models/User");

    const conversations = await Conversation.find({ participants: userId });

    const populatedConversations = await Promise.all(
      conversations.map(async (conv) => {
        const participants = await User.find({
          _id: { $in: conv.participants },
        });
        return {
          ...conv._doc,
          participants,
        };
      })
    );

    res.status(200).json(populatedConversations);
  } catch (error) {
    console.error("Error fetching conversations:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Route for creating messages
router.post("/messages", async (req, res) => {
  try {
    const messages = Array.isArray(req.body) ? req.body : [req.body];
    const Message = require("../models/Message");
    const Conversation = require("../models/Conversation");
    const createdMessages = [];

    for (const msgData of messages) {
      const { conversationId, senderId, text, timestamp } = msgData;

      if (!conversationId || !senderId || !text) {
        return res
          .status(400)
          .json({
            message: "Please provide conversationId, senderId, and text",
          });
      }

      const message = new Message({
        _id: new mongoose.Types.ObjectId().toString(),
        conversationId,
        sender: senderId,
        text,
        timestamp: timestamp || new Date().toISOString(),
      });

      await message.save();
      createdMessages.push(message);

      await Conversation.findByIdAndUpdate(conversationId, {
        lastMessage: message,
      });
    }

    res.status(201).json(createdMessages);
  } catch (error) {
    console.error("Error creating message:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Route for fetching messages
router.get("/messages/:conversationId", async (req, res) => {
  try {
    const { conversationId } = req.params;
    const Message = require("../models/Message");

    const messages = await Message.find({ conversationId });
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error fetching messages:", error);
    res.status(500).json({ message: "Server error" });
  }
});
// Route to fetch all users (excluding the logged-in user)
router.get("/users", protect, async (req, res) => {
  try {
    const User = require("../models/User");
    const users = await User.find({ _id: { $ne: req.user._id } }).select(
      "-password"
    );
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
