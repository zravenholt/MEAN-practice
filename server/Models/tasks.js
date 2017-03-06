var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var taskSchema = new Schema({
  task: String,
  day: String,
  time: Number,
  complete: Boolean
});


module.exports.taskSchema = mongoose.model('Task', taskSchema);