//Routing in express js
const express = require('express');
const app = express();

//sending html
app.get('/',(req, res)=>{
    res.write('<h1>This is home </h1>')
    res.write('<h1>This is home again</h1>') //
    res.send();
})

//sending json
app.get('/about',(req, res)=>{
    // res.send([
    //     {
    //     id: 1,
    //     name: 'harsh'
    //     },
    //     {
    //         id: 1,
    //         name: 'harsh'
    //     }

    res.json([
        {
        id: 1,
        name: 'harsh'
        },
        {
            id: 1,
            name: 'harsh'
        }

]);
})
//The methods are identical when an object or array is passed, but res.json() will also convert non-objects, such as null, undefined , which are not valid JSON

// The res.send function sets the content type to text/Html which means that the client will now treat it as text.
// res.json function on the other handsets the content-type header to application/JSON so that the client treats the response string as a valid JSON object.


app.get('/contact',(req, res)=>{
    res.send('This is contact')
})

const port = 8000;
app.listen(port, ()=>{
    console.log('Port 8000 listening')
})