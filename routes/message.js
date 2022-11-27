const express = require('express')
const router = express.Router();
const Message = require('../models/Message');

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const messages = await Message.find({ 'User ID': id });
  res.json(messages);
})

router.post('/add', async (req, res) => {
  const body = req.body;
  const message = new Message({
    'User ID': body.userId,
    'Timestamp (UTC)': body.timeStamp,
    'Message Body': body.message,
    'Sender' : body.sender
  })
  await message.save();
  console.log(body)
  res.status(200).json({
    status: "SUCCESS"
  });
})

module.exports = router