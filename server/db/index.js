const Sequelize = require('sequelize');
const dbConfig = require('./config');
// Establish database connection
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  dbConfig.config
);

const Event = sequelize.define('event', {
  company: Sequelize.STRING,
  date: Sequelize.DATE,
  description: Sequelize.STRING,
  isInterview: Sequelize.BOOLEAN,
  interviewers: Sequelize.STRING,
  note: Sequelize.STRING,
  complete: Sequelize.BOOLEAN,
  image: Sequelize.STRING,
  emotion: Sequelize.STRING,
}, {
  freezeTableName: true, // Model tableName will be the same as the model name
});

const User = sequelize.define('user', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING,
}, {
  freezeTableName: true, // Model tableName will be the same as the model name
});

const Position = sequelize.define('position', {
  title: Sequelize.STRING,
  company: Sequelize.STRING,
  description: Sequelize.STRING,
}, {
  freezeTableName: true, // Model tableName will be the same as the model name
});

User.sync();
Position.sync();
Event.sync();

module.exports = { User, Position, Event };
