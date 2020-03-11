const express = require('express');

const postsRouter =require('../posts/posts-router.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send (`<h3>Welcome To Posts</h3>`);

});

server.use('/api/posts', postsRouter);

module.exports = server;

//complete