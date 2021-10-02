const mongoose  =  require('mongoose')

//this is for replicating required
const requiredString = {
    type: String,
    required: true
}

const requiredNumber = {
    type: Number,
    required: true
}

const requiredUniqueString = {
    type: String,
    required: true,
    unique: true
}

const userChallengeSchema = mongoose.Schema({
    user_email: requiredString,
    challenge_id: requiredString,
    timestamp: {
        type: Date,
        default: new Date(),
    }
})

module.exports = mongoose.model('userChallenge', userChallengeSchema)