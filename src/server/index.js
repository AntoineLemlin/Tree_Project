import express from "express";

import UserRoutes from  './routes/user.routes'

const {APP_PORT,URI} = process.env;
const mongoose = require('mongoose')
const app = express()
require('./db')
app.use(express.json())
app.use(express.urlencoded({extended: true}));
//routes
app.use('/api/user',UserRoutes)


//server
app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
