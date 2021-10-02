//e8PaZcmplg37nLECjra2XUK0z1q0ERJEMcwolX0i

//https://api.v2.emissions-api.org/api/v2/carbonmonoxide/statistics.json?country=BGD&interval=week&begin=2019-02-10&end=2019-02-11&limit=100&offset=0
const http = require("http")
const https = require("https")


const getEmissionData = async (req,res) => {
    const {product,countrycode,interval,begin,end,limit} = req.query
    
    console.log(product)
    console.log(countrycode)
    console.log(interval)
    console.log(begin)
    console.log(end)
    console.log(limit)


    const getUrl = `https://api.v2.emissions-api.org/api/v2/${product}/statistics.json?country=${countrycode}&interval=${interval}&begin=${begin}&end=${end}&limit=${limit}&offset=0`

    console.log(getUrl)
    
    https
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

module.exports = {getEmissionData}

