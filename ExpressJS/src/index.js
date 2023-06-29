const express = require('express');
const path = require('path');
const app = express();


const templatePath = path.join(__dirname, '../src/templates');
console.log(path.join(__dirname, '../src/templates'))


//to use template engine we need to set it first
//to set the view engine

app.set('view engine','hbs');
app.set('views', templatePath);  //it means views directory has been changed to templates directory

//template engine route
app.get('/', (req, res)=>{
  res.render('index',{
    name: 'harsh'  //sending dynamic content
  })
})

app.get('/about',(req, res)=>{
  res.render('about')
})


app.get('/',(req, res)=>{
  res.send('Hello')
})

app.listen(3000, ()=>{
console.log('Listening to port 3000')
})

//views, the directory where the template files are located. Eg: app.set('views', './views'). This defaults to the views directory in the application root directory.