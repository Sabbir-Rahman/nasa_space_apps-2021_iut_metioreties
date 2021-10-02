const challenge = require('../model/challenges')
const challengeSchema = require('../model/challenges')
const userChallenge = require('../model/userChallengeModel')
const userChallengeSchema = require('../model/userChallengeModel')

const getChallenges = async (req,res) => {
    const challenges = await challenge.find()

    res.json(challenges).status(200)
}

const postChallenges = async (req,res) => {
    const {name,image,description,difficulty,rewardPoint} = req.body

    try {

        const newChallenge = {name,image,description,difficulty,rewardPoint}

        const result = await new challengeSchema(newChallenge).save()
        
        if (result){
            res.json(result).status(201)
        } else {
            res.status(400).json({ message: 'Challenge not saved'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went wrong'})
    }

}

const getUserChallenge = async (req,res) => {
    const userChallenges = await userChallenge.find()

    res.json(userChallenges).status(200)
}

const completeUserChallenge = async (req,res) => {
    const {user_email,challenge_id} = req.body

    try {

        const newChallenge = {user_email,challenge_id}

        const result = await new userChallengeSchema(newChallenge).save()
        
        if (result){
            res.json(result).status(201)
        } else {
            res.status(400).json({ message: 'Challenge not saved'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went wrong'})
    }

}

module.exports = {getChallenges, postChallenges, getUserChallenge}