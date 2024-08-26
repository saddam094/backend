const express = require('express');
const dbConnect = require('../mongodb');
const app = express();

app.use(express.json());

// Simple Get Api
app.get('/', async (req, res)=>{
    try{
        let data = await dbConnect();
        data = await data.find().toArray();
        res.send(data);
    }catch(error){
        console.error(error);
        res.status(500).send({ error: 'Something went wrong' });
    }
    
});

// Simple Post Api
app.post('/', async (req, res) =>{
    try {
        let data = await dbConnect();
        let result = await data.insertOne(req.body);
        // console.log(result);
        res.status(200).send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Something went wrong' });
    }
});

// Simple Put Api
app.put('/', async (req, res) => {
    try{
        
        console.log(req.body);
        let data = await dbConnect();
        let result = await data.updateOne(
            {name:req.body['name']}, {$set: {price:req.body.price}}
        );
        res.status(200).send(result)

    }catch(error){
        console.log(error);
        res.status(500).send({error:"Something Went Wrong"});
    }
});

// Simple Delete Api
app.delete('/', async (req, res) => {
    try{

        console.log(req.body);
        let data = await dbConnect();
        let result = await data.deleteOne({
            name: req.body['name']
        })
        res.status(200).send(result);

    }catch(error){
        console.log(error);
        res.status(500).send({error:"Something Went Wrong"});
    }
});

app.listen(8000);