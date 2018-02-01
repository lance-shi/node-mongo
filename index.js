const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const dboper = require("./operations")

const url = 'mongodb://localhost:27017/conFusion';

MongoClient.connect(url).then((db) => {

    console.log('Connected correctly to server');

    const conFusionDb = db.db("conFusion");
    const collection = conFusionDb.collection("dishes");

    dboper.insertDocuments(collection, {name: "Vadnut", description: "Test"})
    .then((result) => {
        console.log("Insert Document:\n", result.ops);

        return dboper.findDocuments(collection);
    })
    .then((docs) => {
        console.log("Found Documents:\n", docs);

        return dboper.updateDocument(collection, {name: "Vadnut"}, 
            {description: "Updated Test"});
    })
    .then((result) => {
        console.log("Updated Documents:\n", result.result);

        return dboper.findDocuments(collection);
    })
    .then((docs) => {
        console.log("Found Updated Documents:\n", docs);
        return conFusionDb.dropCollection("dishes");
    })
    .then((result) => {
        console.log("Dropped Collection: ", result);
        return db.close();
    })
    .catch((err) => console.log(err));
})
.catch((err) => {console.log(err)});