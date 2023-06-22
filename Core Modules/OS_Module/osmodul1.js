const os = require('os');

//to get the os architecture
console.log(os.arch());

//to get the free memory in bytes in the system
console.log(`${os.freemem()/1024/1024/1024}`);

//to get the total memory in the system in bytes
console.log(os.totalmem())

//to get the admin or user
console.log(os.hostname());

console.log(os.version());

console.log(os.uptime());

console.log(os.platform());

console.log(os.cpus());

console.log(os.type());

console.log(os.machine());

console.log(os.networkInterfaces());

console.log(os.availableParallelism());