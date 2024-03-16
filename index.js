const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env

app.get('/home',(req,res) =>{
res.send('Hello World')
})

app.get('/login', (req, res) =>  {
        res.send('<h1>Please login before accessing the website</h1>')
    })

app.listen(port,() => {
    console.log('Server is Up and Running!!!')
})
