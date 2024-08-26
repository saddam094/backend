// It will work on index.js page
const express = require('express');
const EventEmitter = require('events');
const app = express();
const event = new EventEmitter();

let count = 0;

event.on("countApi", () => {
    count++;
    console.log('event called : '+count);
});

app.get('/', async(req, res) => {
    try{

        res.status(200).send('api called');
        event.emit("countApi");
    
    }catch(error){
        console.lo(error);
        res.status(500).send("something went wrong");
    }
});

app.get('/search', async(req, res) => {
    try{

        res.status(200).send('search api called');
        event.emit("countApi");
    
    }catch(error){
        console.lo(error);
        res.status(500).send("something went wrong");
    }
});


app.get('/update', async(req, res) => {
    try{

        res.status(200).send('update api called');
        event.emit("countApi");
    
    }catch(error){
        console.lo(error);
        res.status(500).send("something went wrong");
    }
});


app.listen(8000);