var express  = require('express');
var app = express();
var bodyParser   = require('body-parser');
var port = process.env.PORT || 3000;
var db = require('./db');
var router = require('./routes.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})) // get information from html forms
app.use(express.static(__dirname + '/../client/public'));

app.use('/api', router);

app.listen(port);
console.log("listening to port: " + port)
module.exports = app

