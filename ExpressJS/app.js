const express = require('express')


//express()
//Creates an Express application. The express() function is a top-level function exported by the express module.
const app = express()




//API methods in expressjs
// get = read
// post - create
// put - update
// delete - delete



// app.get(route, callback())
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('<h1>hello world this is home</h1>')
  })

app.get('/about', (req, res) => {
    res.send('<h1>This is About</h1>')
  })
  //the req object represents the http request and has properties for the request query string. parametrs, body. http header etc. and similiary res is http response



  const port = 3000;
  app.listen(port, ()=>{
    console.log('listening to port 3000')
  })