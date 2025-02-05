const { Sequelize } = require('sequelize');
require('dotenv').config();

// Create Sequelize instance using environment variables from .env
const sequelize = new Sequelize({
  host: "127.0.0.1", // e.g., localhost
  dialect: 'mysql',
  username: "root", // e.g., root
  password: null, // Password for DB connection
  database: "airline", // e.g., airplane
  logging: false,  // Disable logging for queries (optional)
});

// Test the connection
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Connected to MySQL with Sequelize');
  } catch (error) {
    console.error('❌ Unable to connect to MySQL:', error);
  }
};

module.exports = { sequelize, connectDB };
