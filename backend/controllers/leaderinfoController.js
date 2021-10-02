const leaderinfo = require('../model/leaderinfoModel')
const leaderInfoSchema = require('../model/leaderinfoModel')

const getLeaderInfo = async (req,res) => {
    const info = await leaderinfo.find()

    res.json(info).status(200)
}

const postLeaderInfo = async (req,res) => {
    const {area_name,leader_position,leader_name,what_leader_doing,your_suggestion,score} = req.body

    try {

        const newLeaderInfo = {area_name,leader_position,leader_name,what_leader_doing,your_suggestion,score}

        const result = await new leaderInfoSchema(newLeaderInfo).save()
        
        if (result){
            res.json(result).status(201)
        } else {
            res.status(400).json({ message: 'Leaderinfo not saved'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went wrong'})
    }

}

module.exports = {getLeaderInfo,postLeaderInfo}