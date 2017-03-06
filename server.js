var express = require('express');
var json = require('express-json'); //needed to parse out req.body from the post requests
var mongoose = require('mongoose');
var Task = require('./server/Models/tasks.js');
var bodyParser = require('body-parser');
var port = process.env.PORT || 1337;

var app = express();

mongoose.connect('mongodb://localhost/calendar');

console.log(__dirname + '/public');

app.use(express.static(__dirname + '/public'));

app.use( bodyParser.json() );

app.use(json());      

// var newTask = new Task.taskSchema({task: 'chop wood', day: 'Wednesday', time: 16, complete: false});

// newTask.save(function (err) {
//   if (err) {
//     console.log('error, ', err);
//   }
// });

app.get('/api/tasks', function (request, response) {
  Task.taskSchema.find({}, function (err, res) {
    if (err) {
      console.log('error FOUND: ', err);
    } else {
      response.send(res);
    }
  });
});

app.post('/api/tasks', function (request, response) {
  console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX\nXXXXXXXXXXXXXXXXX\nXXX', request.body);
  var task = new Task.taskSchema(request.body);
  task.save();
});



app.listen('1337', function () {
  console.log('listening at port ' + port);
});