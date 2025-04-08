const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    },
  ],
});

const postModel = mongoose.model('posts', postSchema);

module.exports = postModel;
