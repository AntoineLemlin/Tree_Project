"use strict";

var _user = _interopRequireDefault(require("../models/user.model"));

var _error = require("../utils/error.utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const jwt = require('jsonwebtoken');

module.exports.signUp = async (req, res) => {
  const {
    username,
    email,
    password
  } = req.body;
  console.log(req.body);

  try {
    const user = await _user.default.create({
      username,
      email,
      password
    });
    res.status(201).json({
      user: user._id
    });
  } catch (err) {
    const errors = (0, _error.signUpErrors)(err);
    res.status(200).send({
      errors
    });
  }
};

const maxage = 3 * 60 * 60 * 1000;

const createToken = id => {
  return jwt.sign({
    id
  }, "TOKEN_SECRET", {
    expiresIn: maxage
  });
};

module.exports.signIn = async (req, res) => {
  const {
    email,
    password
  } = req.body;

  try {
    const user = await _user.default.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, {
      httpOnly: true,
      maxage
    });
    res.status(200).json({
      user: user._id,
      username: user.username
    });
  } catch (err) {
    const errors = (0, _error.signInErrors)(err);
    res.status(200).json({
      errors
    });
  }
};

module.exports.logout = async (req, res) => {
  res.clearCookie("jwt");
  res.redirect("/");
};
//# sourceMappingURL=auth.controller.js.map