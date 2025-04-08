const jwt = require('jsonwebtoken');
const userModel = require('../models/user');
const userAuth = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      console.log('decoded', decoded);
      req.user = await userModel.findById(decoded.id);
      console.log(req.user);
      next();
    } catch (error) {
      console.log(error);
      res.status(400).json('Not authorized');
    }
  }
};
module.exports = userAuth;
