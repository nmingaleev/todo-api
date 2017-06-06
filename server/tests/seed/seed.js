const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('./../../models/todo');
const {User} = require('./../../models/user');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
  _id: userOneId,
  email: "nikita@example.com",
  password: "123abc54",
  tokens: [{
    access: "auth",
    token: jwt.sign({_id: userOneId.toHexString(), access: 'auth'}, process.env.JWT_SECRET).toString()
  }]
}, {
  _id: userTwoId,
  email: "pavel@example.com",
  password: "abcrtyu",
  tokens: [{
    access: "auth",
    token: jwt.sign({_id: userTwoId.toHexString(), access: process.env.JWT_SECRET}, 'abc123').toString()
  }]
}];

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo',
  _creator: userOneId
}, {
  _id: new ObjectID(),
  text: 'Second test todo',
  completed: true,
  completedAt: 333,
  _creator: userTwoId
}];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

const populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo]);
  }).then(() => done());
};

module.exports = {todos, populateTodos, populateUsers, users};
