const Sequelize = require('sequelize');
const db = require('./../db/index.js');

const Event = db.define('event', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
}, {
  freezeTableName: true, // Model tableName will be the same as the model name
});

Event.sync();

module.exports = Event;
