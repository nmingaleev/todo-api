// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var user = {name: 'Nikita', age: 18};
var {name} = user; //Фича в es6

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { //подключаемся к базе данных
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({ //добавляем запись в базу данных
  //   text:'something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo');
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  // db.collection('Users').insertOne({
  //   name: 'Nikita',
  //   age: 18,
  //   location: 'Tomsk, Russia'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert Users');
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
