const express = require('express')
const router = express.Router()

const isLoggedIn = require('../middleWare/authMiddleware').isLoggedIn

const {getChallenges,postChallenges} = require('../controllers/challengeController')


router.get('/view',getChallenges)
router.post('/add',postChallenges)

module.exports = router