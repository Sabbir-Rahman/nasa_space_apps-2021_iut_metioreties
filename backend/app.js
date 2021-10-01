const express = require('express')
const app = express()

const dotenv = require('dotenv')
const mongoose = require('mongoose')


const PORT = 5000

app.get('/',(req,res)=>{
    res.send('Hello App is running')
})

app.listen(PORT, () => console.log(`Mongodb connected and Server running on port: ${PORT}`))