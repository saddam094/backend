// It will be work on index.js page
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const app = express();

// Ensure the 'uploads' directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg');
    }
});

const upload = multer({ storage: storage }).single('user_file');

app.post('/upload', upload, async (req, res) => {
    try {
        res.status(200).send('file uploaded');
    } catch (error) {
        console.log(error);
        res.status(500).send('something went wrong');
    }
});

app.listen(8000);
