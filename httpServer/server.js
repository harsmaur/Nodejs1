// The http.createServer() method includes request and response parameters which is supplied by Node JS 

//The request object can be used to get information about the current HTTP request e.g. url, request header, and data.

//The response object can be used to send a response for a current HTTP request

//If the reponse from the http server is supposed to be displayed as  HTML, you should include an HTTP header with the correct content type:

//required hhtp module 
const http = require('http');

//craeted a server using createServer() method
const Server = http.createServer((req, res)=>{
      res.end('Hello from the other side');
})

//listening to the request 
const port = 8000;
Server.listen(port, '127.0.0.1', ()=>{
    console.log('Listening to port 8000');
});