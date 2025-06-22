// routes/messageRoutes.js
const express = require('express');
const router = express.Router();

const apiKeyAuth = require('../middleware/apiKeyAuth');
const {
  getMessages,
  postMessage,
  updateMessage,
  deleteMessage
} = require('../controllers/messageController');

// Protect all routes
router.use(apiKeyAuth);

router.get('/messages', getMessages);
router.post('/submit', postMessage);
router.put('/messages/:id', updateMessage);
router.delete('/messages/:id', deleteMessage);

module.exports = router;
