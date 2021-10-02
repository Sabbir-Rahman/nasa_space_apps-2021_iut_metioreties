const express = require('express')
const router = express.Router()

const isLoggedIn = require('../middleWare/authMiddleware').isLoggedIn

const {getEonetData} = require('../controllers/eonetController')
const {getHdroData} = require('../controllers/hdroController')
const {getEmissionData} = require('../controllers/emissionController')

router.get('/view/eonet',getEonetData)
router.get('/view/hdro',getHdroData)
router.get('/view/emission',getEmissionData)

module.exports = router