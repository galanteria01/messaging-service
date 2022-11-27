const express = require('express')
const router = express.Router();
const Message = require('../models/Message');

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const messages = await Message.find({ 'User ID': id });
  res.json(messages);
})

module.exports = router