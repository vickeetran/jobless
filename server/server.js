const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
// const db = require('./db');
const router = require('./routes.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // get information from html forms
app.use(express.static(`${__dirname}/../client/public`));

app.use('/api', router);

app.listen(port);
/* eslint-disable no-console */
console.log(`listening to port: ${port}`);
module.exports = app;

