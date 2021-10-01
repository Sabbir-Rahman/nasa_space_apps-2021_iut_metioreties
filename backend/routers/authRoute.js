const express = require('express')
const router = express.Router()

const isLoggedIn = require('../middleWare/authMiddleware').isLoggedIn

const {userRegister, userLogin, authTest} = require('../controllers/authController')

router.use('/check',isLoggedIn)

router.get('/check',authTest)
router.post('/register',userRegister)
router.post('/login',userLogin)

module.exports = router