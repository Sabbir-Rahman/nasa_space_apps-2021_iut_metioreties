const express = require('express')
const router = express.Router()

const isLoggedIn = require('../middleWare/authMiddleware').isLoggedIn

const {getEonetData} = require('../controllers/eonetController')
const {getHdroData} = require('../controllers/hdroController')

router.get('/view/eonet',getEonetData)
router.get('/view/hdro',getHdroData)

module.exports = router