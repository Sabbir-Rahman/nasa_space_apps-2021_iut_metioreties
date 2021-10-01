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

const challengeSchema = mongoose.Schema({
    name: requiredString,
    image: String,
    description: requiredString,
    difficulty: requiredString,
    rewardPoint: requiredNumber,
    timestamp: {
        type: Date,
        default: new Date(),
    }
})

module.exports = mongoose.model('challenge', challengeSchema)