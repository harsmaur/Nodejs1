
const http = require('http');
const fs = require('fs')


//craeted a server using createServer() method
const Server = http.createServer((req, res)=>{

    const data = fs.readFileSync('UserAPI/userapi.json','utf-8')
   // Did this to prevent from loading the json file again and again 
    //Sync method used here
        
         
    

    //dealing routing to different urls
    if(req.url =='/'){
        res.end('Hello from the home side');
    }
    else if(req.url =='/about'){
        res.end('Hello from the about side');
    }
    else if(req.url == '/userapi'){
        res.writeHead(200, {'Content-type': 'application/json'})
       res.end(data);
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
