// The http.createServer() method includes request and response parameters which is supplied by Node JS 

//The request object can be used to get information about the current HTTP request e.g. url, request header, and data.

//The response object can be used to send a response for a current HTTP request

//If the reponse from the http server is supposed to be displayed as  HTML, you should include an HTTP header with the correct content type:

//required hhtp module 
const http = require('http');
const fs = require('fs')
//craeted a server using createServer() method
const Server = http.createServer((req, res)=>{

    //dealing routing to different urls
    if(req.url =='/'){
        res.end('Hello from the home side');
    }
    else if(req.url =='/about'){
        res.end('Hello from the about side');
    }
    else if(req.url == '/userapi'){

        fs.readFile('UserAPI/userapi.json','utf-8', (err, data)=>{
            if(err){
                res.writeHead(500, {'Content-Type' : 'text/html'})
                res.end('<h1>Error reading userapi.json</h1>');
            }
            else{
                // const objdata = JSON.parse(data);
                res.writeHead(200, {'Content-Type': 'application/json'})
                res.end(data) //sending the data(json)
                // console.log(objdata)
                // res.end(objdata)
            }
             
        })
        // res.end('Hello from userapi side')
    }
    else{
        res.writeHead(404, {'Content-type': 'text/html'}) //to throw error 404(sending header data)
        res.end('<h1>404 does not exists</h1>')
    }
     
     
})

//listening to the request 
const port = 8000;
Server.listen(port, '127.0.0.1', ()=>{
    console.log('Listening to port 8000');
});
