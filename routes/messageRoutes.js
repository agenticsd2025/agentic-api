// routes/messageRoutes.js
const express = require('express');
const router = express.Router();
const {
  getMessages,
  postMessage,
  updateMessage,
  deleteMessage
} = require('../controllers/messageController');

router.get('/messages', getMessages);
router.post('/submit', postMessage);
router.put('/messages/:id', updateMessage);
router.delete('/messages/:id', deleteMessage);

module.exports = router;
