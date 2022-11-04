const authorModel = require("../models/authorModel")
const newbookModel = require("../models/newbookModel")

const createnewBook = async function(req,res){
    let  data = req.body
    let saveData = await newbookModel.create(data)
   res.send ({msg : saveData})

   const getBooksbyChetanBhagat = async function(req,res){
   let data = await authorModel.findOne({author_name : "Chetan Bhagat"}).select({_id : 1})
   let saveData = await newbookModel.find({author_id:data})
   res.send({msg:saveData})
 }
 let findauthor = async function(req,res){
  let data = await newbookModel.findOneAndUpdate({name:"Five poits Someone"},{price:100},{new:true})
  let saveData = await author.findOne({_id:data.author_id}).select({author_name:1,_id:0})
  res.send({msg:saveData,data})
 }

 const getauthorName= async function (req,res){
  let data = await newbookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
  let  arr =[]
  for(let index=0;index<data.length;index++) 
  {
    const element = data[index];
    let author=element.author_id
    let saveData=await authorModel.find({_id:author}).select({author_name:1,_id:0})
    arr.push(saveData)
  }
  res.send({msg:arr.flat(Infinity)})
 }


 module.exports.createnewBook=createnewBook;
 module.exports.getBooksbyChetanBhagat=getBooksbyChetanBhagat;
 module.exports.findauthor=findauthor;
 module.exports.getauthorName=getauthorName;
 