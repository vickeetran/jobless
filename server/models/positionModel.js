const Sequelize = require('sequelize');
const db = require('./../db');

const Position = db.define('position', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
}, {
  freezeTableName: true, // Model tableName will be the same as the model name
});

module.exports = Position;
