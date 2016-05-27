var express  = require('express');
var app = express();
var bodyParser   = require('body-parser');
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})) // get information from html forms
app.use(express.static(__dirname + '/../client/public'));

//for user testing
// app.route('/user').get(function(req,res){
//   console.log('/user');
//   res.json({user: 'bob'});
// });
app.listen(port);
console.log("listening to port: " + port)
// module.exports = app