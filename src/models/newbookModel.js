const mongoose = require('mongoose');
const newbookModel= new mongoose.Schema({
    name : String,
    author_id : {
        type : mongoose,Schema,Object,
        required : true } ,
    price : Number,
    rating : Number
},{ timestamps : true});

module.exports = mongoose.model('newbook',newbookModel)