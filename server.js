var express = require('express');
var mongoose = require('mongoose');
var Task = require('./server/Models/tasks.js');
var port = process.env.PORT || 1337;

var app = express();

mongoose.connect('mongodb://localhost/calendar');

console.log(__dirname + '/public');

app.use(express.static(__dirname + '/public'));

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
      console.log(res);
      response.send(res);
    }
  });
});

app.post('/api/tasks', function (request, response) {
  var task = new Task.taskSchema(reqeust.body.data);
  task.save();
});



app.listen('1337', function () {
  console.log('listening at port ' + port);
});