const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

// POST route to save form data
router.post('/submit-basic-info', async (req, res) => {
  const { name, birthdate, city, mobile, university, profilePicture } = req.body;

  try {
    const newProfile = new Profile({
      name,
      birthdate,
      city,
      mobile,
      university,
      profilePicture,
    });

    await newProfile.save();
    res.status(201).json({ message: 'Profile data saved successfully', profile: newProfile });
  } catch (error) {
    res.status(500).json({ message: 'Error saving profile data', error: error.message });
  }
});

module.exports = router;