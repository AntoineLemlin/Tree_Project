import express from "express";
import cookieParser from "cookie-parser"
import UserRoutes from  './routes/user.routes'
import {checkuser,requireauth} from './middleware/auth.middleware'
const {APP_PORT,URI} = process.env;
const mongoose = require('mongoose')
const app = express()
import path from "path";

require('./db')

app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())
app.use(express.static(path.resolve(__dirname, "../../bin/client")));

//middleware

 app.get("*",checkuser)
 app.get('/jwtid',requireauth,(req,res)=>{
     res.status(200.).send(res.locals.user._id)
 })
//routes
app.use('/api/user',UserRoutes)

//server
app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
