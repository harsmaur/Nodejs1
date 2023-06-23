const EventEmitter = require('events')
//first letter is capital CamelCase
//above we have created a class


//creating object named event of EventEmitter class
const event = new EventEmitter();


//example 1

//defining what to happen on that event .on()
event.on('sayMyName', ()=>{
    console.log('Your name is Harsh')
})

//firing event
event.emit('sayMyName');

// the concept is quite simple: emitter object emit named events that cause previously registered listeners to be called. So, an emitter object basically has two main features:

// 1 Emitting name events.
// 2 Registering and unregistering listener functions


//Example 2 
// register a couple of callbacks
event.on('sayMyName', ()=>{
    console.log('Your name is Harsh')
})

event.on('sayMyName', ()=>{
    console.log('Your name is Harshu')
})

event.on('sayMyName', ()=>{
    console.log('Your name is Hars')
})

event.on('sayMyName', ()=>{
    console.log('Your name is Harsmaur')
})

event.emit('sayMyName');


// Example 3
// event with callback parameters.

event.on('checkPage', (status, msg) => {
     console.log(`status code is ${status} and the page is ${msg}`)
})

event.emit('checkPage', 200, 'ok')