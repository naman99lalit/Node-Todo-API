//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
  if(err){
    return console.log('Unable to connect to the MONGODB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp')

  //findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5c9f39d7d3dfee0fe1650d18")},
  // {
  //   $set:{
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    age: 19 
  },{
    $inc:{
      age:+2
    }
  },{
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  });
  //client.close();
  //db.close();
});
