"use strict";

var _user = _interopRequireDefault(require("../models/user.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const jwt = require('jsonwebtoken');

module.exports.checkuser = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, "TOKEN_SECRET", async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        res.clearCookie('jwt');
        next();
      } else {
        console.log('decoded token' + decodedToken.id);
        let user = await _user.default.findById(decodedToken.id);
        res.locals.user = user;
        console.log(res.locals.user);
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

module.exports.requireauth = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, "TOKEN_SECRET", async (err, decodedToken) => {
      if (err) {
        console.log(err);
      } else {
        console.log(decodedToken.id);
        next();
      }
    });
  } else {
    console.log('no token');
  }
};
//# sourceMappingURL=auth.middleware.js.map