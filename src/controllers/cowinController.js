let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
} 

let  getVaccination  =  async function(req,res){
    try{
        let district_id =req.query.district_id
        let date=req.query.date
     
     var  options={
        method:'get',
        url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date${date}`,
       
     }
     let result=await axios(options)
     console.log(result.data)
     res.status(200).send({ msg: result.data })
 }
 catch(err) {
     console.log(err)
     res.status(500).send({ msg: err.message })
 }
    
}

let getMeme=async function(req,res){
    try{
        let{username,password,text0,text1,template_id}=req.query
    let  options={
            method:'get',
            url:`https://api.imgflip.com/caption_image?username=${username}&password=${password}&text0=${text0}&text1=${text1}&template_id=${template_id}`,
           
         }
         let result=await axios(options)
     console.log(result.data)
     let data=result.data
     res.status(200).send({ msg: result.data })
 }
 catch(err) {
     console.log(err)
     res.status(500).send({ msg: err.message })
    }
}

let getWeather =async function(req,res){
    try{
    let country = req.query.country
    let appid=req.query.appid
    let  options={
        method:'get',
        url:`http://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${appid}`,
       
     }
     let result=await axios(options)
 console.log(result.data)
 let data=result.data
 res.status(200).send({ msg: result.data })
}
catch(err) {
 console.log(err)
 res.status(500).send({ msg: err.message })
}
    
}


let onlyLondonTemperature=async function(req,res){
    try{
    let city="London"
    let key=req.query.appid;
    let  options={
        method:'get',
        url:`http://api.openweathermap.org/data/2.5/weather?q=${city},&appid=${key}`,
       
     }
     let result=await axios(options)
 console.log(result.data)
 //let data=result.data
 res.status(200).send({Temperature:result.data.main.temp })
}
catch(err) {
 console.log(err)
 res.status(500).send({ msg: err.message })
}
    
}



const checkweather = async function (req, res) {
    try {
        let arr = []
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        for (let index = 0; index < cities.length; index++) {
            const element = cities[index];
            const { appid } = req.query
            let options = {
                method: "get",
                url: `http://api.openweathermap.org/data/2.5/weather?appid=${appid}&q=${element}`
            }
            let result = await axios(options)
            let data = result.data
            const { main: { temp }, name } = data
            arr.push({ name, temp })
        }
        arr.sort((a, b) => {
            return a.temp - b.temp;
        })
        res.status(200).send({ status: true, msg: arr })
    } catch (err) {
        res.status(500).send({ status: false, msg: err.message })
  }
}


module.exports.checkweather=checkweather
module.exports.onlyLondonTemperature=onlyLondonTemperature
module.exports.getWeather=getWeather
module.exports.getMeme=getMeme
module.exports.getVaccination=getVaccination
module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp