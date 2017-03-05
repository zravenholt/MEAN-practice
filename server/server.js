var express = require('express');
var mongoose = require('mongoose');
var port = process.env.PORT || 1337;

var app = express();

mongoose.connect('mongodb://localhost/calendar');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.send('hello world!');
});




app.listen('1337', function () {
  console.log('listening at port ' + port);
});