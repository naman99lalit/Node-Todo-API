//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to the MONGODB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

  // db.collection('Todos').find({
  //   _id:new ObjectID('5c9a72b0db00235460a4c41b')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to Fetch Todos',err);
  // })

  db.collection('Users').find({
    name: "Mrinaal Lalit"
  }).count().then((count)=>{
    console.log(`Todos count: ${count}` );
  },(err)=>{
    console.log('Unable to Fetch Todos',err);
  });
  db.collection('Users').find({
    name:"Mrinaal Lalit"
  }).toArray().then((docs)=>{
    console.log('Users Database');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Unable to find the value in the database');
  });
  //client.close();
  //db.close();
});
