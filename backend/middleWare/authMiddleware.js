let express = require('express');
let cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken')

const isLoggedIn = (req,res,next) => {

    const autheHeader = req.headers['authorization']
    const token = autheHeader && autheHeader.split(' ')[1]

    if (token== null) return res.status(401).json({'message':'Token invalid'})

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET, (err,tokenUser)=>{
        if (err) return res.status(403).json({'message':err})
        req.user = tokenUser
        next()
    })


    
}

module.exports = {isLoggedIn}