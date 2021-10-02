const express = require('express')
const router = express.Router()

const isLoggedIn = require('../middleWare/authMiddleware').isLoggedIn

const {getLeaderInfo,postLeaderInfo} = require('../controllers/leaderinfoController')


router.get('/view',getLeaderInfo)
router.post('/add',postLeaderInfo)

module.exports = router