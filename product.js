const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    categories: String,
    image: String
});

module.exports = mongoose.model('products', productSchema);