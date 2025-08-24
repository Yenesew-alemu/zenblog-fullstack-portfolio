// /server/routes/auth.js

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
const router = express.Router();

// Define routes here...
// POST /api/auth/login
// /server/routes/auth.js

// ... (imports from above)

// POST /api/auth/login
router.post('/login', async (req, res) => {
  // 1. Destructure email and password from the request body
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Please provide email and password.' });
  }

  try {
    // 2. Check if the user exists in the database
    const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
    const user = rows[0];

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials.' }); // Use a generic message for security
    }

    // 3. Compare the provided password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials.' }); // Same generic message
    }

    // 4. If credentials are correct, create a JWT
    const payload = {
      user: {
        id: user.id,
        username: user.username,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '1h' }, // Token expires in 1 hour
      (err, token) => {
        if (err) throw err;
        // 5. Send the token back to the client
        res.json({ token });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
