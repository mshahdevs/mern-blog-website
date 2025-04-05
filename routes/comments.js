const express = require('express');
const { comments } = require('../controllers/comments');
const router = express.Router();

router.post('/add-comments', comments);
module.exports = router;
