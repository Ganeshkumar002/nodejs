const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema({
    userId:{
        type : ObjectId,
        ref : "User"
    },
    productId :{
        type : ObjectId,
        ref :"product"
    },
    amount :  { type: Number},
    isFreeAppUser :  {type : Boolean},
    date : {
        type : Date,

        default: new Date (Date.now())
    }
},
{timsetamps: true});


module.exports=mongoose.model('Order',orderSchema)