const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/saddam");

const productSchema = new mongoose.Schema({
    name:String,
    brand: String,
    price: Number,
    categories: String
});

const saveInDB = async () => {
    const productModel = mongoose.model('products', productSchema);
    let data = new productModel({
        name: "m2",
        brand: "apple",
        price: 80000,
        categories: "mac-book"
    });
    let result = await data.save();
    console.log(result);
}

// saveInDB();

const updateInDB = async ()=>{
    const productModel = mongoose.model('products', productSchema);
    let data = await productModel.updateMany(
        {name: "m8"},
        {$set: {
            categories: "mac-book"
        }}
    );
    console.log(data);
}

// updateInDB();

const deleteInDB = async ()=>{
    const productModel = mongoose.model('products', productSchema);
    let data = await productModel.deleteOne({
        name: "m2"
    });
    console.log(data);
}

// deleteInDB();

const findInDB = async ()=>{
    const productModel = mongoose.model('products', productSchema);
    let data = await productModel.find({name: "m2"});
    console.log(data);
}

// findInDB();