const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// var id = "5912a332f0dffb2c3827a7ee";

// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id //Search by id
// }).then((todos) => {
//   console.log('Todos', todos);
// })
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// }); //Returns the first tha matches the query

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found'); // If there is no todo with that id
//   }
//   console.log('Todo by id', todo);
// }).catch((e) => console.log(e));

var userID = "5912a93a09847f5a342f60f2";

User.findById(userID).then((user) => {
  if(!user) {
    return console.log('User not found');
  }

  console.log('User', user);
}).catch((err) => {
  console.log(err);
});
