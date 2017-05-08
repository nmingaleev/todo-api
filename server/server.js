var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {//creating a model
  text: {
    type: String
  },
  complited: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

// var newTodo = new Todo({
//   text: 'Do the dishes'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved Todo', doc);
// }, (e) => {
//   console.log('Unable to save Todo');
// });

var newTodo = new Todo({
  text: 'Walk the dog',
  complited: false,
  completedAt: 0
});

newTodo.save().then((doc) => {
  console.log('Saved Todo', doc);
}, (e) => {
  console.log('Unable  to save todo');
});
