const dbConnect = require('../mongodb');

const deleteData = async () =>{
    let data = await dbConnect();

    // it is used to delete one record

    let result = await data.deleteOne(
            {name:'m4'}
    );


    // it is used to delete one record
    
    // let result = await data.deleteMany(
    //         {brand: 'apple',categories: 'mac-book'}
    // );

    console.warn(result);
}

deleteData();