const express = require('express');
const Message = require('../models/Message');
const router = express.Router();

router.get('/list', async (req, res) => {
  const doc = await Message.find({});
  res.send(doc);
})

module.exports = router