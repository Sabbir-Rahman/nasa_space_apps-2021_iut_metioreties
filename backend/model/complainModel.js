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

const complainSchema = mongoose.Schema({
    polluter_name: requiredString,
    pollution_image1: String,
    pollution_image2: String,
    pollution_image3: String,
    pollution_description: requiredString,
    what_can_be_done: String,
    intensityPoint: requiredNumber,
    timestamp: {
        type: Date,
        default: new Date(),
    }
})

module.exports = mongoose.model('complain', complainSchema)