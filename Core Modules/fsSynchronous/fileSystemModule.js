const fs = require('fs'); 
//to get the module functionalities we need to require it first

fs.writeFileSync('read.txt','This is filemodule');

//below method will overrite the above wriiten text
fs.writeFileSync('read.txt','This is filemodule write again');


//writing without overiding the already exist text
fs.appendFileSync('read.txt','How are you!')


//Reading data from the tt file
const buf_data = fs.readFileSync('read.txt');
// console.log(buf_data)

{/* <Buffer 54 68 69 73 20 69 73 20 66 69 6c 65 6d 6f 64 75 6c 65 20 77 72 69 74 65 
20 61 67 61 69 6e 48 6f 77 20 61 72 65 20 79 6f 75 21> */}


//Nodejs includes an additional data type called Buffer
// (not available in browsers Js)
// Buffer is mainly used to store binary data
// While reading from a file or recieving packets over the network.


//convert data from buffer to string 
org_data = buf_data.toString();
console.log(org_data)


//to rename the file
fs.renameSync('read.txt', 'readwrite.txt');


fs.writeFileSync('practice.txt', "This is a practice file");
