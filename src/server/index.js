/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import express from "express";
import path from "path";

const {MongoClient} = require("mongodb");
const {APP_PORT, URI} = process.env;

const client = new MongoClient(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();
app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/api/tree", (req, res) => {
    const trees = [];
    client.connect((err) => {
        const collection = client.db("DataTree").collection("Trees");
        collection.find({}).toArray((err, result) => {
            if (err) throw err;
            console.log("Data fetched");
            result.forEach((element) => {
                trees.push(element);
            });
            res.send(trees);
            client.close();
        });
    });
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
