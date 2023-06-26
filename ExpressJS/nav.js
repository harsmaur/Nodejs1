//Routing in express js
const express = require('express');
const app = express();


app.get('/',(req, res)=>{
    res.send('This is home')
})


app.get('/about',(req, res)=>{
    res.send('This is about')
})

app.get('/contact',(req, res)=>{
    res.send('This is contact')
})

const port = 8000;
app.listen(port, ()=>{
    console.log('Port 8000 listening')
})