const {MongoClient} = require("mongodb");

const uri = "mongodb+srv://Doug:wGr47bAHftUH0QiR@cluster0.hxkq3.mongodb.net/curso?retryWrites=true&w=majority"

const client = new MongoClient(uri, {useUnifiedTopology: true});

// client.connect().then(result =>{
//     const database = client.db("curso");
//     const collection = database.collection("aluno");
//     console.log(result);
// }, error => {
//     console.error(error);
// });

module.exports = client;