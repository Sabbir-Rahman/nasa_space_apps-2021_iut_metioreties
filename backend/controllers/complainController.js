const complain = require('../model/complainModel')
const complainSchema = require('../model/complainModel')

const getComplain = async (req,res) => {
    const complains = await complain.find()

    res.json(complains).status(200)
}

const postComplain = async (req,res) => {
    const {polluter_name,pollution_image1,pollution_image2,pollution_image3,pollution_description,what_can_be_done,intensityPoint} = req.body

    try {

        const newComplain = {polluter_name,pollution_image1,pollution_image2,pollution_image3,pollution_description,what_can_be_done,intensityPoint}

        const result = await new complainSchema(newComplain).save()
        
        if (result){
            res.json(result).status(201)
        } else {
            res.status(400).json({ message: 'Complain not saved'})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went wrong'})
    }

}

module.exports = {getComplain, postComplain}