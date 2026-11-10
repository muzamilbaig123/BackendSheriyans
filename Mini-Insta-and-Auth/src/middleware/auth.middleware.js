const jwt = require("jsonwebtoken");
const userModel = require("../models/user.models");

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization;

  const data = jwt.decode(token);

  const user = await userModel.findById(data.id);

  req.user = user;

  next();
};

module.exports = { authenticate };
