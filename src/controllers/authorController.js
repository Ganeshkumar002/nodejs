const authorModel =  require("../models/authorModel")

const createauthor = async function (req,res) {
    let data = req.body
    let saveData = await authorModel.create(data)
    res.send({msg : saveData})
} 


module.exports.createauthor=createauthor
