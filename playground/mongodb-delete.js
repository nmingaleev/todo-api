// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var user = {name: 'Nikita', age: 18};
var {name} = user; //Фича в es6

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { //подключаемся к базе данных
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Walk the dog'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Clean the room'});

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteMany({name: 'Nikita'});

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("590be29609847f5a342f15d5")
  }).then((result) => {
    console.log(result.value);
  });
  // db.close();
});
