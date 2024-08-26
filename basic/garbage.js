// const express = require('express');
// const dbConnect = require('./mongodb');
// const mongodb = require('mongodb');
// const app = express();

// app.get('/', async (req,res)=>{
//     //res.send('hallo');
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     res.send(data);
// })

// // app.post('/', async (req,res)=>{
// //     console.log(req.body);
// //     let data = await dbConnect();
// //     let result = await data.insertOne(req.body);
// //     res.send(result);
// // })

// app.delete('/', async (req,res)=>{
//     console.log(req.params.id);
//     let data = await dbConnect();
//     let result = await data.deleteOne({_id:'6553a2bed0bcd1aa943ff42a'});
//     res.send(result);
// })

// app.listen(8000);