const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

Todo.remove({}).then((result) => { //Deltes everything
  console.log(result);
})

//Todo.findOneAndRemove({});
//Todo.findByIdAndRemove();
