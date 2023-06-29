const express = require('express');
const path = require('path');
const app = express();


//to use template engine we need to set it first
//to set the view engine
app.set('view engine','hbs');

//template engine route
app.get('/', (req, res)=>{
  res.render('index')
})

app.get('/',(req, res)=>{
  res.send('Hello')
})

app.listen(3000, ()=>{
console.log('Listening to port 3000')
})

//views, the directory where the template files are located. Eg: app.set('views', './views'). This defaults to the views directory in the application root directory.