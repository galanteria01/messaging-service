const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/list', async (req, res) => {
  const doc = await User.find({});
  res.send(doc);
})

router.get('/:id', async (req, res) => {
  const user = await User.find({ 'User ID': req.params.id });
  res.send(user);
})

module.exports = router