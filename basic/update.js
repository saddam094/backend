const dbConnect = require('./mongodb');

const updateData = async () =>{
    let data = await dbConnect();

    // it is used to update any one value
    let result = await data.updateOne(
        {name: 'oppo A3s'},
        {$set: {name: 'm2', brand:'apple'}}
    );

    // it is used to update all

    // let result = await data.updateMany(
    //     {brand:'apple'},
    //     {$set: {categories: 'mac-book'}}
    // );
    console.warn(result);
}

updateData();