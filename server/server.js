require('./config/config.js'); //Checking git

const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const _ = require('lodash');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

const port = process.env.PORT; //For heroku

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text,
    completed: req.body.completed
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
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
      res.send({todo});
    } else {
      res.status(404).send();
    }
  }, (err) => {
    res.status(404).send();
  });
});

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((result) => {
    if(!result) {
      res.status(404).send();
    }

    res.status(200).send({result});
  }).catch((e) => {
    res.status(404).send();
  });
});

app.patch('/todos/:id', (req, res) => {
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']); //properties that user can update

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if (_.isBoolean(body.completed) && body.completed) { // if boolean and true
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((result) => {
    if (!result) {
      return res.status(404).send('Oops');
    }
    res.status(200).send({result});
  }).catch((e) => {
    res.status(400).send('Something went wrong');
  });
})

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
