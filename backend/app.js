const express = require('express')
const app = express()


const dotenv = require('dotenv')
const mongoose = require('mongoose')
var cors = require('cors')
app.use(cors())
dotenv.config()

const authRoutes = require('./routers/authRoute')

const PORT = 5000

const CONNECTION_URL = process.env.CONNECTION_URL


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/',(req,res)=> {
    res.send(`Hello from nasa space apps 2021 iut meteorites backend`)
})

app.use('/auth',authRoutes)


const connectDB = async () => {
    try {
        await mongoose.connect(CONNECTION_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => app.listen(PORT, () => console.log(`Mongodb connected and Server running on port: ${PORT}`)))
        .catch((error) => console.log(error.message));
    
        
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
  };
  
connectDB();