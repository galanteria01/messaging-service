const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  'User ID': {
    type: String
  }
})

module.exports = mongoose.model('User', userSchema, 'user');
