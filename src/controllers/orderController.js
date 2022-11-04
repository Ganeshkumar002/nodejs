const orderModel = require('../models/orderModel');
const OrderModel = require('../models/orderModel');
const ProductModel = require('../models/productModel');
const userModel = require('../models/userModel');
const UserModel = require('../models/userModel');
const createOrder = async function(req,res){
    let data =req.body
    let uId = data.userId
    let pId = productId
    let isFreeAppUser=req.headers.isfreeappuser;
    let user = await UserModel.findById(uId);
    let product = await ProductModel.findById(pId);
    if(data.hasOwnProperty("userId")==false){
        res.send({error: "userId is required"});
    }
    else if(!user){
        res.send({error: "Wrong userId is entered"})
    }
    if(data.hasOwnProperty("productId")==false){
        res.send({error: "productId is required"});
    }
    else if(!product){
        res.send({error: "Wrong productId is entered"})
 
    } 
    let productDetail = await ProductModel.findById(pId);

    let priceValue =  productDetail.price
    let userDetail = await UserModel.findById(uId); 
    let userBalance=userDetail.balance;
    if(FreeAppUser=="false"){
     if(userBalance>priceValue){

     let   updateBalance=await UserModel.findByIdAndUpdate(
        {_id:uId},
        {$inc:{balance:-priceValue} },
        {new:true}
     )
        data.amout=priceValue;
        data.isFreeAppUser=false
        let orderDetails = await orderModel.create(data)    
        res.send({order: orderDetail})
    }
    else{
        res.send({error: "insufficient balance"})
    }
}
else{
    data.amout = 0;
    data.isFreeAppUser=true
    let orderDetail = await OrderModel.create(data);
     res.send({order: orderDetail})
}
}


module.exports.createOrder=createOrder;

