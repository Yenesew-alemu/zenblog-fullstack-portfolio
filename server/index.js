// /server/index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
const categoryRoutes = require('./routes/categories');
const userRoutes = require('./routes/users');
const utilRoutes = require('./routes/utils');

const app = express();

// A simple CORS setup is enough for local development
app.use(cors());

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/users', userRoutes);
app.use('/api', utilRoutes);

app.get('/', (req, res) => {
  res.send('Hello from the ZenBlog API!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});