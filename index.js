require('dotenv').config();


const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch(err => console.error('MongoDB connection error:', err));

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
