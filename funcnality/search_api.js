// It will work on index js page
const express = require('express');
require('./config')
const product = require('./product');

const app = express();
app.use(express.json());

app.get('/search/:key', async(req, res) => {
    try{

        console.log(req.params.key);
        let data = await product.find(
            {
                "$or":[
                    {name:{$regex: req.params.key}},
                    {brand:{$regex: req.params.key}}
                ]
            }
        );
        res.status(200).send(data);

    }catch(error){
        console.log(error);
        res.status(500).send("something went wrong");
    }
    
});

app.listen(8000);