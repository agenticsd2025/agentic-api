require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Import your route module
const messageRoutes = require('./routes/messageRoutes');
app.use('/', messageRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
