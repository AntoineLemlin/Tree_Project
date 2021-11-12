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

app.post("/login",(req,res)=>{
    client.connect((err)=>{
        const collection = client.db("DataTree").collection("Users");
        const {user,password} =req.body;
        collection.findone({username:user},(err,user)=>{
            if(user){
               if(password === user.password){
                   res.send({message:"login sucess",user:user})
               }else{
                   res.send({message:"wrong credentials"})
               }
            }else{
                res.send("not register")
            }
        })
    })
});

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
