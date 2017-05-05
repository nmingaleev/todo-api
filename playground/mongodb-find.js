// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var user = {name: 'Nikita', age: 18};
var {name} = user; //Фича в es6

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => { //подключаемся к базе данных
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').find().toArray().then((docs) => { //из указателей на todos создает массив
    console.log('Todos:');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.collection('Todos').find({completed: true}).toArray().then((docs) => {//возвращает талько завершенные todos
    console.log('Todos(commpleted):');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Todos', err);
  });

  // db.collection('Todos').find({
  //   _id: new ObjectID("590bc89f09847f5a342f1256")
  // }).toArray().then((todo) => {
  //   console.log('By id:');
  //   console.log(JSON.stringify(todo, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch Todo', err);
  // });

  db.collection('Todos').find().count().then((count) => { //используем count
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch Todo', err);
  });

  db.collection('Users').find({name: 'Nikita'}).toArray().then((user) => { //Извлекаем данные из users
    console.log('Users:');
    console.log(JSON.stringify(user, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch Users', err);
  });

  db.close();
});
