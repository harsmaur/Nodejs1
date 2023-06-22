// const oper = require('./oper')


 //this is the method for importing the module
// we can import the module by any name and use it by that name


// console.log(add(5, 9));
// console.log(oper.name)
// console.log(oper.add(3, 5));
// console.log(oper.subt(9, 3));

//Since the required module contains various blocks exported then it isrequired as a object 


//or we can destructure the required module by es6 syntax if we do not want to use everytime oper.name or oper.add


const {name, add, subt} = require('./oper');

console.log(name)
console.log(add(3, 5));
console.log(subt(9, 3));