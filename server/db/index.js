const Sequelize = require('sequelize');

// Table Models
const User = require('./../models/userModel.js');
const Event = require('./../models/eventModel.js');
const Position = require('./../models/positionModel.js');

const dbConfig = require('./config');
// Establish database connection
const connection = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig.config
);

// Create Tables if they don't exist
User.sync();
Event.sync();
Position.sync();

module.exports = connection;
