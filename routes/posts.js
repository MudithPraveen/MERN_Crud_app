const express = require('express');        // import express
const Posts = require('../models/posts');           //import models from models folder
const router = express.Router();

//save posts
router.post('/post/save',(req,res)=>{

    let newPost = new Posts(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Posts saved successfully"
        });
    });
});


//Get posts
router.get('/posts',(req,res)=>{
    Posts.find().exec((err,posts)=>{   //find is give by mongoose
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});

//Update posts
router.put('post/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(  //give by mongoose
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                success:"Updated Successfully"
            });
        }
    );
});

//Delete Posts
router.delete('/post/delet:id',(req,res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{
        if(err){
            return res.status(400).json({
                message:"Delete Unsuccesful",err
            });

        }
        return res.json({
            message:"Delete Succesfull",deletedPost
        });
    });
});

module.exports = router;