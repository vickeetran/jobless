const Sequelize = require('sequelize');

const dbConfig = require('./config');
// Establish database connection
const connection = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig.config
);

module.exports = connection;
