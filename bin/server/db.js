"use strict";

const {
  URI
} = process.env;

const mongoose = require('mongoose');

mongoose.connect(`${URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('connecting to mongodb')).catch(err => console.log('failed to connect mongodb', err));
//# sourceMappingURL=db.js.map