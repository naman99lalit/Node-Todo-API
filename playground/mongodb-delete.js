//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to the MONGODB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

  //deletemany
  // db.collection('Todos').deleteMany({text:"Hello Naman!"}).then((result)=>{
  //   console.log(result);
  // });
  //deleteOne
  // db.collection('Todos').deleteOne({text:"Naman"}).then((result)=>{
  //   console.log(result);
  // })
  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name:"Naman Lalit"}).then((result)=>{
  //   console.log(result);
  // });
  db.collection('Users').findOneAndDelete({ _id: new ObjectID("5c9a76acab75099ba843d281")}).then((result)=>{
    console.log(result);
  });
  //client.close();
  //db.close();
});
