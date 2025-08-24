// /server/middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function(req, res, next) {
  // 1. Get token from the header
  const token = req.header('x-auth-token');

  // 2. Check if no token is present
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  // 3. Verify the token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Attach the user from the payload to the request object
    req.user = decoded.user;
    next(); // Call next to proceed to the next middleware/route handler
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};