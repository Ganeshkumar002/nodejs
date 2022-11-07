
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

//const UserModel = require('../models/userModel')

const authenticate = async function(req,res,next){

    let token =req.headers["x-auth-token"]

    if(!token) return res.status(400).send({status: false,smg : "token must be  provided" });
    
    let  verifiedToken=jwt.verify(token,"ganeshkumar")
    if(!verifiedToken) return res.status(400).send({status:false,msg:"Invalid token"})
   
    req.isVerifiedTokennId =verifiedToken.userId
    console.log(verifiedToken)
    next();

}
  
   const authorize = async function(req,res,next){
    let UserId =req.params.userId
    let tokenId=req.isVerifiedTokenId

    let userById=await userModel.findById(UserId)
    if(!userById) return res.status(400).send({status:false,msg:"user does not exist"})
    if(!UserId) return res.status(400).send({status:false,msg:"Unauthorized access"})
   
    next()


   }  
   
module.exports.authenticate=authenticate
module.exports.authorize=authorize





// const authenticate = function(req, req, next) {
//     //check the token in request header
//     //validate this token

//     next()
// }


// const authorise = function(req, res, next) {
//     // comapre the logged in user's id and the id in request
//     next()
// }