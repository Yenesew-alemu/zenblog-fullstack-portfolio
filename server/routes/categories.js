// /server/routes/categories.js

const express = require('express');
const router = express.Router();
const db = require('../config/db'); // Import the database connection
const authMiddleware = require('../middleware/authMiddleware'); // <-- 1. IMPORT THE MIDDLEWARE

// --- PUBLIC ROUTES ---

// GET /api/categories - Fetch all categories
router.get('/', async (req, res) => {
  try {
    const query = 'SELECT * FROM categories ORDER BY name ASC';
    const [categories] = await db.query(query);
    res.json(categories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// GET /api/categories/:id/posts - Fetch all posts for a specific category
router.get('/:id/posts', async (req, res) => {
  try {
    const categoryId = req.params.id;
    const query = `
      SELECT 
        p.id, p.title, p.slug, LEFT(p.content, 150) as excerpt,
        p.featured_image_url, p.created_at, u.username as author_name, c.name as category_name 
      FROM posts p
      LEFT JOIN users u ON p.author_id = u.id
      LEFT JOIN categories c ON p.category_id = c.id
      WHERE p.category_id = ?
      ORDER BY p.created_at DESC;
    `;
    const [posts] = await db.query(query, [categoryId]);
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});


// --- PROTECTED ADMIN ROUTES ---

// POST /api/categories - Create a new category (Protected)
router.post('/', authMiddleware, async (req, res) => {
  const { name, description } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Category name is required.' });
  }

  try {
    const query = 'INSERT INTO categories (name, description) VALUES (?, ?)';
    // In our frontend we only send 'name', so 'description' will be null. This is fine.
    const [result] = await db.query(query, [name, description || null]);
    // Send back a success message AND the ID of the new category
    res.status(201).json({ message: 'Category created successfully', categoryId: result.insertId });
  } catch (err) {
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(409).json({ message: 'A category with this name already exists.' });
    }
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


// DELETE /api/categories/:id - Delete a category (Protected)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const query = 'DELETE FROM categories WHERE id = ?';
    const [result] = await db.query(query, [req.params.id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Category not found.' });
    }

    res.json({ message: 'Category deleted successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


module.exports = router;