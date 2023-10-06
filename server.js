const express = require('express'); //express import
const mongoose = require('mongoose'); // import mongoose

const app = express(); //express invok to our app

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

