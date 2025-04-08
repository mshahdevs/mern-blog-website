const express = require('express');
const { createPost, getPosts } = require('../controllers/post');
const userAuth = require('../middleware/userAuth');
const router = express.Router();

router.post('/', userAuth, createPost);
router.get('/', userAuth, getPosts);

module.exports = router;
