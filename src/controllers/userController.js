// //const bookSchema = require("../models/bookSchema")
// //const bookSchema = require("../models/bookSchema")
// const userModel = require("../models/userModel")
// //const { use } = require("../routes/route")


// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await userModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await userModel.find()
//     res.send({msg: allUsers})

// } 
// module.exports.createUser= createUser
// module.exports.getUsersData= getUsersData


const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBookData= async function (req, res) {
    let allUsers= await BookModel.find()
    res.send({msg: allUsers})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData