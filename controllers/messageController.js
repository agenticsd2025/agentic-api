const Message = require('../models/Message');

let getMessages = async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
};

let postMessage = async (req, res) => {
  const { name, message } = req.body;
  const newMessage = await Message.create({ name, message });
  res.status(201).json(newMessage);
};

let updateMessage = async (req, res) => {
  const updated = await Message.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ message: 'Not found' });
  res.json(updated);
};

let deleteMessage = async (req, res) => {
  const deleted = await Message.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ message: 'Not found' });
  res.json({ message: 'Deleted' });
};

module.exports = {
  getMessages,
  postMessage,
  updateMessage,
  deleteMessage
};
