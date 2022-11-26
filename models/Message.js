const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
  'User ID': {
    type: String
  },
  'Timestamp (UTC)': {
    type: String
  },
  'Message Body': {
    type: String
  }
})

module.exports = mongoose.model('Message', messageSchema, 'message');
