"use strict";

var _express = _interopRequireDefault(require("express"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

var _auth = require("./middleware/auth.middleware");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  APP_PORT,
  URI
} = process.env;

const mongoose = require('mongoose');

const app = (0, _express.default)();

const {
  MongoClient
} = require("mongodb");

const client = new MongoClient(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

require('./db');

app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
}));
app.use((0, _cookieParser.default)());
app.use(_express.default.static(_path.default.resolve(__dirname, "../../bin/client")));
app.get("/api/tree", (req, res) => {
  const trees = [];
  client.connect(err => {
    const collection = client.db("DataTree").collection("Trees");
    collection.find({}).toArray((err, result) => {
      if (err) throw err;
      console.log("Data fetched");
      result.forEach(element => {
        trees.push(element);
      });
      res.send(trees);
      client.close();
    });
  });
});
app.get("*", _auth.checkuser);
app.get('/jwtid', _auth.requireauth, (req, res) => {
  res.status(200).send({
    id: res.locals.user._id,
    username: res.locals.user.username
  });
});
app.use('/api/user', _user.default);
app.listen(APP_PORT, () => console.log(`🚀 Server is listening on port ${APP_PORT}.`));
//# sourceMappingURL=index.js.map