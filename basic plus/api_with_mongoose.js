const express = require('express');
require('./config')
const product = require('./product');

const app = express();
app.use(express.json());


app.post('/create', async (req, res)=>{
    try{
    
        let data = new product(req.body);
        let result = await data.save();
        console.log(result);
        res.send(result);

    }catch(error){
        console.log(error);
        res.status(500).send("something went wrong");
    }
});


app.get('/list', async (req, res) =>{
    try{

        let data = await product.find();
        res.status(200).send(data);

    }catch(error){
        console.log(error);
        res.status(500).send("something went wrong");
    }
});

app.delete("/delete/:_id", async (req, res) =>{
    try{

        console.log(req.params);
        let data = await product.deleteOne(req.params);
        res.status(200).send(data);

    }catch(error){
        console.log(error);
        res.status(500).send("something went wrong");
    }
});


app.put('/update/:_id', async (req, res) =>{
    try{

        console.log(req.params);
        let data = await product.updateOne(
            req.params,
            {
                $set: req.body
            }
        );

        res.status(200).send(data);

    }catch(error){
        console.log(error);
        res.status(500).send("something went wrong");
    }
});


app.listen(8000);