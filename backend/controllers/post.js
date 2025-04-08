const postModel = require('../models/post');
const userModel = require('../models/user');

const createPost = async (req, res) => {
  const { title, content, tags } = req.body;

  if (!title || !content) {
    throw new Error('please all fields are required');
  } else if (title === title) {
    res.status(400).json('Title already exists');
  }
  const user = await userModel.findById(req.user.id);
  console.log(user);
  console.log(req.user);
  const post = await postModel.create({
    author: req.user.id,
    title,
    content,
    tags,
    likes: user,
  });
  res.status(201).json({ message: 'post created successfully', post });
};
const getPosts = async (req, res) => {
  const posts = await postModel.find();
  if (!posts) {
    res.status(400).json('Post not found');
  }
  res.status(200).json(posts);
};
module.exports = { createPost, getPosts };
