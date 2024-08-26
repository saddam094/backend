const dbConnect = require('./mongodb');

const insert = async () =>{
    const db = await dbConnect();

    /// It is for singe connection

    // let result = await db.insertOne(
    //     {name: 'note 10', brand:'vivo', price: '22000', categories: 'mobile'}
    // );

    /// It is for multiple connection
    
    // const result = await db.insertMany(
    //     [
    //         {name: 'm1', brand:'apple', price: '80000', categories: 'mac-book'},
    //         {name: 'm2', brand:'apple', price: '82000', categories: 'mac-book'},
    //         {name: 'm3', brand:'apple', price: '84000', categories: 'mac-book'},
    //         {name: 'm4', brand:'apple', price: '86000', categories: 'mac-book'},
    //     ]
    // );


    if(result.acknowledged)
    {
        console.log("Data Inserted");
    }else{
        console.log("Data not inserted");
    }
}

insert();