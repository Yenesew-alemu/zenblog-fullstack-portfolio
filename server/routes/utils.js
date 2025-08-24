// /server/routes/utils.js

const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Define utility routes here...
// GET /api/search?q=... - Search for posts
router.get('/search', async (req, res) => {
  const queryTerm = req.query.q;

  if (!queryTerm) {
    return res.status(400).json({ message: 'Search query is required.' });
  }

  try {
    const query = `
      SELECT 
        p.id, 
        p.title, 
        p.slug, 
        LEFT(p.content, 150) as excerpt,
        p.created_at, 
        u.username as author_name, 
        c.name as category_name
      FROM posts p
      LEFT JOIN users u ON p.author_id = u.id
      LEFT JOIN categories c ON p.category_id = c.id
      WHERE p.title LIKE ? OR p.content LIKE ?
      ORDER BY p.created_at DESC;
    `;
    // The '%' are wildcards, so it matches if the term appears anywhere
    const searchTerm = `%${queryTerm}%`;
    const [posts] = await db.query(query, [searchTerm, searchTerm]);

    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
// POST /api/contact - Handle contact form submission
router.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // --- In a real app, you would do something here ---
  // 1. Save to database: await db.query('INSERT INTO messages ...');
  // 2. Send an email: await sendEmail({ name, email, subject, message });

  // For now, we will just log it to the console to prove it works.
  console.log('--- New Contact Form Submission ---');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${message}`);
  console.log('---------------------------------');

  res.status(200).json({ message: 'Thank you for your message. We will get back to you soon!' });
});

module.exports = router;