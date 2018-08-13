
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

module.exports = mongoose;