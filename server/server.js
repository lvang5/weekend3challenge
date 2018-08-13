//requires
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const tasks = require('./routes/tasks')
const mongoose = require('./modules/database-connection')

//makes the data available on req.body
//bodyparser sets req.body = data;
app.use(bodyParser.json()); //angular JS
app.use(bodyParser.urlencoded({extended: true})); //jquery
app.use('/tasks', tasks);

//use
app.use(express.static('server/public'));
mongoose;



app.listen( port, ()=>{
    console.log('server up on', port);    
})