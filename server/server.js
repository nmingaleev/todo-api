var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

app.use(bodyParser.json());

// app.post('/todos', (req, res) => {// Creating new todo
//   var todo = new Todo({
//     text: req.body.text
//   });
//
//   todo.save().then((doc) => {
//     res.send(doc);
//   }, (e) => {
//     res.status(400).send(e);
//   })
// });

app.post('/todos', (req, res) => {
  var newTodo = new Todo({
    text: req.body.text,
    completed: req.body.completed
  })

  newTodo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});


// var newTodo = new Todo({
//   text: 'Walk the dog',
//   complited: false,
//   completedAt: 0
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved Todo', doc);
// }, (e) => {
//   console.log('Unable  to save todo');
// });
