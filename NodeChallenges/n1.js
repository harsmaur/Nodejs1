const fs = require('fs');

//created a directory/Folder using mkdir and it is Synchronous version

// fs.mkdirSync('Harsh');


//CRUD 1: CREATE

//created a file called bio.txt inside the Harsh Directory (we need to specify the path where the file has to be created)
fs.writeFileSync('Harsh/bio.txt','MyName Harsh Maurya')

// 2: UPDATE
fs.appendFileSync('Harsh/bio.txt'," My Age 21")
fs.appendFileSync('Harsh/bio.txt'," My Stck web")
//3: READ
const biodata = fs.readFileSync('Harsh/bio.txt')
console.log(biodata.toString())

// use file encoding to get the data as it is in file
const biodata2 = fs.readFileSync('Harsh/bio.txt', 'utf8')
console.log(biodata2)


//rename the file (provide the file path correct;y )
fs.renameSync('Harsh/bio.txt','Bio.txt');


//created a demo file onto which delete file operation will be performed
fs.writeFileSync('Harsh/demo.txt','demo txt');

//Delete file
fs.unlinkSync('Harsh/demo.txt');


//to remove the directory/Folder '
// fs.rmdirSync("foldername")