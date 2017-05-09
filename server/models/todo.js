var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {//creating a model
  text: {
    type: String,
    minlength: 1,
    trim: true, //удаляет пробелы в начале и конце
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

module.exports = { Todo };
