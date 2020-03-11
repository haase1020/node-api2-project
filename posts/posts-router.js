const express = require('express');

const Posts = require('../data/db.js');

const router = express.Router();


//add post, post, get, get, get, delete, put requests

router.post('/', (req,res) => {
    const post = req.body;
    if (!post.title|| !post.contents) {
        res.status(400).json(
            {errorMessage: "Please provide title and contents for the post." }
        );
    }else {
        Posts.insert(post)
        .then(post => {
            res.status(201).json(post);
        })
        .catch(err =>{
            console.log(`Error: ${err}`);
            res.status(500).json({
                error: 'There was an error while saving the post to the database'
            });
        });
    }
});

router.post('/:id/comments', (req,res)=> {
    const { id }=req.params;
    const comment = {...req.body, post_id: id };
    if (!id) {
        res.status(404).json({
            message: 'The post with the specified ID does not exist'
        });
    } else if (!req.body.text) {
        res.status(400).json({
            errorMessage: 'Please provide text for the comment'
        });
    } else {
        Posts.insertComment(comment)
        .then(comment => {
            res.status(201).json(comment);
        })
        .catch(err => {
            console.log(`Error:${err}`);
            res.status(500).json({
                error: 'There was an error while saving comment' 
            });
        });
    }
});




router.get('/', (req, res) => {
    Posts.find(req.query)
    .then(posts => {
        res.status(200).json(posts);
    })
    .catch(err => {
        console.log (`Error:${err}`);
        res.status(500).json({
            error: 'The posts information could not be retrieved'
        });
    });
});


module.exports = router;