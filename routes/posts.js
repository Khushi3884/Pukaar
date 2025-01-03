const express = require('express');
const router = express.Router();
const { createPost, getAllPosts } = require('../controllers/postController');

// Create a new post
router.post('/', createPost);

// Get all posts
router.get('/', getAllPosts);

module.exports = router;
