const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/list', async (req, res) => {
  const doc = await User.find({});
  res.send(doc);
})

module.exports = router