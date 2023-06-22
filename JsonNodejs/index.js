const fs = require('fs');


//Js object
const biodata = {
    name : 'Harsh',
    age : '21',
    Branch : 'CSD'
}

console.log(biodata.Branch)

//Converting object to JSON
// use JSON.stringify() to convert data from object to json
const jsondata = JSON.stringify(biodata);

console.log(jsondata)  //will get the json of object

//below is the json object from the object
// {"name":"Harsh","age":"21","Branch":"CSD"}


//Now to get the js object from the json 
const objdata = JSON.parse(jsondata);
console.log(objdata)


fs.writeFile('json1.json', jsondata, (err)=>{
   console.log('Created file succesfully')
})

fs.readFile('json1.json','utf-8', (err, data)=>{
    console.log(data);
    const orgdata = JSON.parse(data);
    console.log(orgdata);
})