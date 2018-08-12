const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Schema = mongoose.Schema; //Similar to a class

//Define Schema
const TaskSchema = new Schema ({
    task: {type: String},
    complete: {type: Boolean, default: false}
});


//Model allows us to interface with the database = mongo
const Tasks = mongoose.model('Tasks', TaskSchema);
//Tasks will be the name of the collection
router.post('/', (req, res) => {
    console.log('/tasks in POST');
    console.log(req.body);
    //adding to the database
    const addTask = new Tasks(req.body);
    //puts into the database
    addTask.save().then(() => {
        console.log('Task has been added', addTask);
        res.sendStatus(201); //All good
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500); //crash!
    });
});

router.get('/', (req, res) => {
    console.log('/GET hit');
    // {} means find everything! We are searching the collection.
    Tasks.find({}).then( (foundTask) => {
        console.log('found task');
        
        // foundRepairs is an Array of everything found
        res.send(foundTask);
    }).catch( (error) => {
        res.sendStatus(500);  
    });
})

router.delete('/:id', (req, res) => {
    console.log('in Delete');
    Tasks.findByIdAndRemove(req.params.id).then((response) => {
        res.sendStatus(201);
    }).catch((error) => {
        res.sendStatus(500);
    });
    
})


module.exports = router;