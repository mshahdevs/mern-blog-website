const userModel = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new Error('Please all fields are required');
  }
  //User exist or not
  const userExist = await userModel.findOne({ email });
  if (userExist) {
    res.status(400).json('user already exist');
  }
  //hashing password
  const hashPassword = await bcrypt.hash(password, 10);

  //new user for register
  const user = await userModel.create({
    name,
    email,
    password: hashPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
};

//Login
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new Error('Please all fields are required');
  }

  const user = await userModel.findOne({ email });

  if (user) {
    res.status(201).json({
      _id: user._id,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
};

//Generate token
function generateToken(id) {
  const token = jwt.sign({ id }, process.env.SECRET_KEY, {
    expiresIn: '4h',
  });
  return token;
}

module.exports = { register, login };
