//e8PaZcmplg37nLECjra2XUK0z1q0ERJEMcwolX0i

//https://eonet.sci.gsfc.nasa.gov/api/v3/categories/wildfires

const http = require("http")
const https = require("https")


const getEonetData = async (req,res) => {
    const {categories} = req.query

    
    https
    .get(`https://eonet.sci.gsfc.nasa.gov/api/v3/categories/${categories}`, resp => {
        let data = "";

        //Chunk of data
        resp.on("data", chunk => {
            data += chunk;
        })

        //whole response received time for response
        resp.on("end", () => {
            let url = JSON.parse(data);
            console.log(url)
            res.json(url).status(201)
        })
        .on("error", err => {
            console.log("Error: "+ err.message);
        })
    })
}

module.exports = {getEonetData}

