const os = require('os');

console.log(os.arch()); // It will give you System Architecture
console.log(os.freemem()/(1024*1024*1024)); // It will give you free space of RAM
console.log(os.totalmem()/(1024*1024*1024)); // It will give you total space of RAM
console.log(os.hostname()); // It will give you Laptop Model Name
console.log(os.userInfo()); // It will give you some information like root directory

