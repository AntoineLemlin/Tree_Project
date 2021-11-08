/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import express from "express";
import path from "path";
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://thomas-b:zBaiQVtqyzN7eZqw@cluster0.0xebq.mongodb.net/test?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const {APP_PORT} = process.env;

const trees = [];

const app = express();

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/api/tree", (req, res) => {
client.connect(err => {
  const collection = client.db("DataTree").collection("Trees");
  collection.find({}).toArray((err,result) => {
      if (err) throw err;
        console.log("Data fetched");
        result.forEach(element => {
            trees.push(element);
        });
        res.send(trees);
      client.close();
  })
});
});
setTimeout(() => console.log(trees), 10000)

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
