const Sequelize = require('sequelize');
const dbConfig = require('./sampleconfig');
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
  freezeTableName: true,
});

const User = sequelize.define('user', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING,
  googleID: Sequelize.STRING,
}, {
  freezeTableName: true,
});

const Position = sequelize.define('position', {
  title: Sequelize.STRING,
  company: Sequelize.STRING,
  description: Sequelize.STRING,
}, {
  freezeTableName: true,
});


User.hasMany(Position);
Position.belongsTo(User);
Position.hasMany(Event);
Event.belongsTo(Position);
sequelize.sync();

module.exports = { User, Position, Event };
