// /server/config/db.js (New PostgreSQL version)
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  // Supabase requires SSL
  ssl: {
    require: true,
  },
});

// We export the entire pool now
module.exports = pool;