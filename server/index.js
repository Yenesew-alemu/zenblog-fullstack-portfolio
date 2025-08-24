// Import required packages
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const categoryRoutes = require('./routes/categories');
const userRoutes = require('./routes/users');
const utilRoutes = require('./routes/utils');
require('dotenv').config(); // Loads environment variables from .env file

// Create an Express application
const app = express();

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Enable the Express app to parse JSON formatted request bodies
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/users', userRoutes);
app.use('/api', utilRoutes);

// A simple test route to make sure the server is running
app.get('/', (req, res) => {
  res.send('Hello from the ZenBlog API!');
});

// Get the port from environment variables, with a default of 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});