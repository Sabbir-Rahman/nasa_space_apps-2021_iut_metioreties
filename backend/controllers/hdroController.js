//e8PaZcmplg37nLECjra2XUK0z1q0ERJEMcwolX0i

//http://ec2-54-174-131-205.compute-1.amazonaws.com/API/HDRO_API.php/country_code=AFG,ZWE/indicator_id=103206,103606,103706/year=1990,2013,2019/structure=ciy

const http = require("http")
const https = require("https")


const getHdroData = async (req,res) => {
    const {countrycodes,indicator_ids,years} = req.query
    

    console.log(countrycodes)
    console.log(indicator_ids)
    console.log(years)

    const getUrl = `http://ec2-54-174-131-205.compute-1.amazonaws.com/API/HDRO_API.php/country_code=${countrycodes}/indicator_id=${indicator_ids}/year=${years}/structure=ciy`

    console.log(getUrl)
    
    http
    .get(getUrl, resp => {
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

module.exports = {getHdroData}

