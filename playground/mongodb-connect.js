const MongoClient = require('mongodb').MongoClient;

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
  db.collection('Users').insertOne({
    name: 'Nikita',
    age: 18,
    location: 'Tomsk, Russia'
  }, (err, result) => {
    if(err) {
      return console.log('Unable to insert Users');
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
