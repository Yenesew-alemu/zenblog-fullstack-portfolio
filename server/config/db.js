// /server/config/db.js (Connection String Version for Neon/Render)
const { Pool } = require('pg');
require('dotenv').config();

// The pg Pool can automatically use a DATABASE_URL environment variable if it's available.
// We configure it explicitly here to ensure SSL is required.
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    require: true,
  },
});

module.exports = pool;