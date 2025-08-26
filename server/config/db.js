// /server/config/db.js (New PostgreSQL version)
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  // Supabase requires a secure SSL connection
  ssl: {
    require: true,
  },
});

// We export the pool to be used by our route files
module.exports = pool;