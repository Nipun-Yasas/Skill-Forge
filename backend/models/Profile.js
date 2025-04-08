const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  birthdate: { type: String, required: true },
  city: { type: String, required: true },
  mobile: { type: String, required: true },
  university: { type: String, required: true },
  profilePicture: { type: String, default: '' },
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);