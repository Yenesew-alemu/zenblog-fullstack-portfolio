// /server/config/db.js (NEW - Direct Client Version)
const { Client } = require('pg');
require('dotenv').config();

// This object defines the connection configuration.
const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: {
    require: true,
    rejectUnauthorized: false,
  },
  // We no longer need the 'family: 4' with this direct approach
};

// We now export an object with a single method: 'query'.
// This is a "wrapper" that handles connecting and disconnecting for every query.
module.exports = {
  query: async (text, params) => {
    const client = new Client(dbConfig);
    try {
      await client.connect(); // Open a new connection
      const res = await client.query(text, params); // Run the query
      return res;
    } finally {
      await client.end(); // IMPORTANT: Always close the connection
    }
  },
};