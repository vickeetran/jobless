const mysql = require('mysql');
const config = require('./config');

const connection = mysql.createConnection({
  host: config.config.host,
  user: config.username,
  password: config.password,
});
connection.connect();

connection.query(`CREATE DATABASE IF NOT EXISTS ${config.database}`, err => {
  if (err) throw err;
  connection.end();
});
