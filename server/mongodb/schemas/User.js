const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: String,
  avatarUrl: String,
  zipcode: String,
  other: String
});

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
