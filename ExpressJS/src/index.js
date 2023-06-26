const express = require('express')
const path = require('path');
const app = express()


// To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.
// The function signature is:
// express.static(root, [options])
// app.use(express.static('public'))

// console.log(path.join(__dirname,'../public'))

const staticPath = path.join(__dirname,'../public');
app.use(express.static(staticPath))


app.get('/', (req, res) => {
    res.send('<h1>hello world this is home</h1>')
})

app.get('/about', (req, res) => {
    res.send('<h1>This is About</h1>')
})


const port = 3001;
app.listen(port, () => {
    console.log('listening to port 3000')
})