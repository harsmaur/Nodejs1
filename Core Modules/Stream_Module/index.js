const fs = require('fs');  //stream is required using the fs module
const http = require('http');
const { Readable, Writable, Duplex, Transform, Stream } = require('stream');


const Server = http.createServer();

//using events module methods
//sending data but not streaming
Server.on('request',(req, res)=>{

    // fs.readFile('input.txt', (err, data)=>{
    //     if(err) return console.log(err);
    //     res.end(data.toString())
    // });


    //now using stream
//     const rstream = fs.createReadStream('input.txt');
//     rstream.on('data', (chunkdata)=>{
//         //Handle stream events -> data, end and error
//         res.write(chunkdata)
//     })
//     rstream.on('end', ()=>{
//         res.end();
// })
// rstream.on('error', (err)=>{
//     console.log(err)
// })

// 3rd way
// Stream.pipe() the method used to take a readbale stream and connect it to a writeable Stream
const rstream = fs.createReadStream('input.txt');
rstream.pipe(res)
})



const port = 8001
Server.listen(port, "127.0.0.1",()=>{
    console.log('Listening to port 8001')
})


//Streams are objects that let you read data from a source or write data to a destination in continous fashion 

// The four streams are as follows

// Readable
// Writable
// Duplex
// Transform


//Each type of stream is an EventEmitter instance and throws several events at different instance of times. for eg, some of the commonly used events are -

// data - This event is fired when there is data ia available to read
// end - This event is fired when there is no more data to read
// error - This event is fired when there is any error recieving or writing data

// finish - This event is fired when all the data has been flushed to underlying system

