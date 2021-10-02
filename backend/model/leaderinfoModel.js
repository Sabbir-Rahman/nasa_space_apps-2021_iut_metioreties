const mongoose  =  require('mongoose')

//this is for replicating required
const requiredString = {
    type: String,
    required: true
}

const requiredUniqueString = {
    type: String,
    required: true,
    unique: true
}

const leaderInfoSchema = mongoose.Schema({
    area_name: requiredString,
    leaader_position: String,
    leader_name: requiredString,
    what_leader_doing: requiredString,
    your_suggestion: String,
    score: Number,
    timestamp: {
        type: Date,
        default: new Date(),
    }
})

module.exports = mongoose.model('leaderinfo', leaderInfoSchema)