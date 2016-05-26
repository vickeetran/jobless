var express  = require('express');
var app      = express();
var bodyParser   = require('body-parser');
// var index = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})) // get information from html forms
app.use(express.static(__dirname + '/../client'));

module.exports = app
