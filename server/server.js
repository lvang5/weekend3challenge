//requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const tasks = require('./routes/tasks')

//makes the data available on req.body
//bodyparser sets req.body = data;
app.use(bodyParser.json()); //angular JS
app.use(bodyParser.urlencoded({extended: true})); //jquery
app.use('/tasks', tasks);

//use
app.use(express.static('server/public'));


//connect to mongo
const mongoose = require('mongoose');
//where is mongo?
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/tasks';
//tasks is what we are naming our database

mongoose.connect(mongoURI, {useNewUrlParser: true});

// avoids a warning in the consol

//log out success or failure
mongoose.connection.on('open', () =>{
    //success
    console.log('Connected to Mongo');
    
});

mongoose.connection.on('error', (error) =>{
    console.log('ERROR CONNECTING TO MONGO', error);
});


app.listen( port, ()=>{
    console.log('server up on', port);    
})