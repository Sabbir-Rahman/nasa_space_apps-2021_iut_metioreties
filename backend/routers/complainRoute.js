const express = require('express')
const router = express.Router()

const isLoggedIn = require('../middleWare/authMiddleware').isLoggedIn

const {getComplain, postComplain} = require('../controllers/complainController')


router.get('/view',getComplain)
router.post('/add',postComplain)

module.exports = router