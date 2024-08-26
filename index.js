const express = require('express');
require('./config');
const cloudinary = require('./cloudinary');
const product = require('./product');
// const upload = require('./multer');
const multer = require('multer');
const path = require('path');



const app = express();
app.use(express.json());


// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Specify the directory where files should be saved
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Use a unique filename
    }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({
            success: false,
            message: "No file uploaded"
        });
    }

    try {
        const result = await cloudinary.uploader.upload(req.file.path);

        let requestData = {
            name: req.body.name,
            brand: req.body.brand,
            price: req.body.price,
            categories: req.body.categories,
            image: result.url
        };

        let data = new product(requestData);
        let result1 = await data.save();
        console.log(result1);

        res.status(200).send(result1);
        
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Error uploading file"
        });
    }
});


app.listen(8000);