const Sequelize = require('sequelize');
const db = require('./../db');

const User = db.define('user', {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
}, {
  freezeTableName: true, // Model tableName will be the same as the model name
});

User.sync();

module.exports = User;
