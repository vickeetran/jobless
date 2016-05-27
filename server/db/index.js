var mysql = require('mysql');
var dbConfig = require('./config');

var connection = mysql.createConnection(dbConfig);

connection.connect();

module.exports = connection;