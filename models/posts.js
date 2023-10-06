const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({       //create schema
    topic:{
        type:String,
        required:true
    },                   // create variables
    description:{
        type:String,
        required:true
    },
    postCategory:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Posts',postSchema);  // export the schema