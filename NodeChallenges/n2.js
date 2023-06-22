const fs = require('fs');

fs.mkdir('Harsh2',(err)=>{
    console.log('Folder created')
})

fs.writeFile('./Harsh2/Bio2.txt','This is a node challaenge 2 ',(err)=>{
    console.log("Created file inside harsh2 folder")
})

fs.appendFile('./Harsh2/Bio2.txt','Appended text ', (err)=>{
    console.log('Appended new text to file')
})

 fs.readFile('./Harsh2/Bio2.txt','utf-8', (err, data)=>{
    console.log(data);
    
})


// fs.unlink('./Harsh2/Bio2.txt',(err)=>{
//     console.log('file deleted')
// })


// fs.rmdir('./Harsh2',(err)=>{
// console.log('Deleted the directory')
// })