const User =  require('../model/userModel')

const jwt = require('jsonwebtoken')
const userSchema = require('../model/userModel')
const bcrypt = require('bcrypt')
const saltRounds = 10

const authTest = ((req,res)=> {
    res.json(req.user)
})


const userRegister = async (req,res) => {
    //fullname,email,pass,confpass
    const {fullname,email,password,confpassword} = req.body

    try {
        
       
        const existingUser = await User.findOne({email})
        
        

        if(existingUser) return res.status(400).json({ message: "User already exist"})

        if(password !== confpassword){
            return res.status(400).json({ message: "Password don't match"})
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = {fullname:fullname, email:email,password:hashedPassword}

        const result =  await new userSchema(newUser).save()
        
        const tokenUser = {id: result._id,fullname:result.fullname,email: result.email,user_role:result.user_role}
        const token = jwt.sign(tokenUser, process.env.ACCESS_TOKEN_SECRET)
          
        res.status(201).json({ tokenUser, token})
        
        
    } catch (error) {
       console.log(error)
        res.status(500).json({ message: 'Something went wrong'})
    }

    
}

const userLogin = async (req,res) => {
    const { email, password } = req.body

    try {
        const existingUser = await User.findOne({ email });

        if(!existingUser) return res.status(404).json({ message: "User doesn't exist"})

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)

        if(!isPasswordCorrect){
            return res.status(400).json({ message: "Invalid credentials"})
        }
        const tokenUser = {id: existingUser._id,fullname:existingUser.fullname,email: existingUser.email,user_role:existingUser.user_role}
        const token = jwt.sign(tokenUser, process.env.ACCESS_TOKEN_SECRET,{ expiresIn: '10h'})
        res.status(200).json({result: existingUser, token})
    
    } catch (error) {
       
        res.status(500).json({ message: "Something went wrong"})
    }
}

module.exports = {userRegister, userLogin, authTest}