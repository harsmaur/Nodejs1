
// (  function(exports, require, module, __filename, __dirname){
//     //all the code goes inside this wrapper function 
//     const fs = require('fs')
//     const name = 'harsh'
//     console.log(name);
//     // module.exports = name;
// } 
// )


(
    function(){
        const a = 'Harsh Maurya';
        console.log(a);
    }
)(); 

//console.log(a); // this will produce an error coz the data inside the wrapper/iife function is private

console.log(__dirname);
console.log(__filename)