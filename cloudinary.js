const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
    cloud_name: 'dj9wmfdjn',
    api_key: '364548163856319',
    api_secret: 'T_347YajXAOba72g1y3RGs1CYNg'
  });

module.exports = cloudinary;