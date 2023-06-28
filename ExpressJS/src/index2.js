const express = require('express');
const path = require('path');
const app = express();




//Middleware builtIn

// app.use(express.static())


const publicPath = (path.join(__dirname, '../public'))
app.use(express.static(publicPath))

app.get('/',(req, res)=>{
  res.send('Hello')
})

app.listen(3000, ()=>{
console.log('Listening to port 3002')
})