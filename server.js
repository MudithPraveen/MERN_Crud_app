const express = require('express'); //express import
const mongoose = require('mongoose'); // import mongoose
const bodyParser = require('body-parser');  //information get to server as json format, so we have to convert in to javascript opject using body paser

const app = express(); //express invok to our app

//imports routs
const postRoutes = require('./routes/posts');

app.use(bodyParser.json()); //app middleware

app.use(postRoutes);//routes middleware


const PORT = 8000; //running port

const DB_URL = 'mongodb+srv://Admin:Admin@mernapp.ivdj90u.mongodb.net/mernCrud?retryWrites=true&w=majority';

mongoose.connect(DB_URL)  //connnect db
.then(() =>{  //if success
    console.log('DB Connected');
})
.catch((er) =>{ // if not success catch the error
    console.log('DB connection error',er);
});

app.listen(PORT, () =>{     //app is listen where want to run port
    console.log(`App is running on ${PORT}`);
});

