// /server/routes/categories.js (PostgreSQL version)
const express = require('express');
const router = express.Router();
const db = require('../config/db');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM categories ORDER BY name ASC');
    res.json(result.rows);
  } catch (err) { /* ... error handling ... */ }
});
router.get('/:id/posts', async (req, res) => {
  try {
    const query = `
      SELECT p.id, p.title, p.slug, LEFT(p.content, 150) as excerpt, p.featured_image_url, p.created_at, u.username as author_name, c.name as category_name 
      FROM posts p LEFT JOIN users u ON p.author_id = u.id LEFT JOIN categories c ON p.category_id = c.id
      WHERE p.category_id = $1 ORDER BY p.created_at DESC;
    `;
    const result = await db.query(query, [req.params.id]);
    res.json(result.rows);
  } catch (err) { /* ... error handling ... */ }
});
router.post('/', authMiddleware, async (req, res) => {
  const { name, description } = req.body;
  if (!name) return res.status(400).json({ message: 'Category name is required.' });
  try {
    const query = 'INSERT INTO categories (name, description) VALUES ($1, $2) RETURNING *';
    const result = await db.query(query, [name, description || null]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    if (err.code === '23505') { // 23505 is the PostgreSQL code for unique violation
      return res.status(409).json({ message: 'A category with this name already exists.' });
    }
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const result = await db.query('DELETE FROM categories WHERE id = $1', [req.params.id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ message: 'Category not found.' });
    }
    res.json({ message: 'Category deleted successfully' });
  } catch (err) { /* ... error handling ... */ }
});
module.exports = router;