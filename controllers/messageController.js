// controllers/messageController.js
const { messages } = require('../data/messageStore');

const getMessages = (req, res) => {
  const { name } = req.query;
  let filtered = messages;

  if (name) {
    filtered = messages.filter(msg =>
      msg.name.toLowerCase() === name.toLowerCase()
    );
  }

  res.json({
    total: filtered.length,
    messages: filtered
  });
};

const postMessage = (req, res) => {
  const data = req.body;
  const entry = {
    id: messages.length + 1,
    ...data,
    timestamp: new Date().toISOString()
  };

  messages.push(entry);

  res.json({
    message: 'Message received and stored',
    entry
  });
};

const updateMessage = (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  const index = messages.findIndex(msg => msg.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ message: 'Message not found' });
  }

  messages[index] = {
    ...messages[index],
    ...updatedData,
    updatedAt: new Date().toISOString()
  };

  res.json({
    message: 'Message updated',
    updated: messages[index]
  });
};

const deleteMessage = (req, res) => {
  const { id } = req.params;
  const index = messages.findIndex(msg => msg.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ message: 'Message not found' });
  }

  const deleted = messages.splice(index, 1);

  res.json({
    message: 'Message deleted',
    deleted
  });
};

module.exports = {
  getMessages,
  postMessage,
  updateMessage,
  deleteMessage
};
