var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

const port = process.env.PORT || 3000; //For heroku

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text,
    completed: req.body.completed
  })

  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send(todos);
  }, (err) => {
    res.status(400).send(err);
  })
});

app.get('/todos/:id', (req, res) => { //req.params.id
  var id = req.params.id;

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById(id).then((todo) => {
    if (todo) {
      res.status(200).send(todo);
    } else {
      res.status(404).send('Todo not found');
    }
  }, (err) => {
    res.status(404).send('Todo not found');
  });
});

app.listen(port, () => {
  console.log('Started on port 3000');
});



module.exports = {app}

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
