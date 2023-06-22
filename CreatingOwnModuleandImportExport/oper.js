
//Each file in Nodejs is called as module

const add = (a, b)=>{
   return a+b;
}
const name = 'harsh ';

const subt = (a, b)=>{
    return a-b;
}

//This is method to export the module 
// module.exports = add;


//when exporting multiple blocks use below syntax
// module.exports.add = add;
// module.exports.subt = subt;
// module.exports.name = name;

//we can also use this syntax to export

module.exports = {add, subt, name};
