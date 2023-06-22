const path = require('node:path');

//The node:path module provides utilities for working with file and directory paths.

console.log(path.dirname('C:/Backend Development/Nodejs/Core Modules/path_module/pathmodule1.js'));

//t get the extension of file name
console.log(path.extname('C:/Backend Development/Nodejs/Core Modules/path_module/pathmodule1.js'));


//to get the base file name
console.log(path.basename('C:/Backend Development/Nodejs/Core Modules/path_module/pathmodule1.js'));


//to get all the properties in one place
console.log(path.parse('C:/Backend Development/Nodejs/Core Modules/path_module/pathmodule1.js'));

// since it returns object we can get values of it using object methods
console.log(path.parse('C:/Backend Development/Nodejs/Core Modules/path_module/pathmodule1.js').name);