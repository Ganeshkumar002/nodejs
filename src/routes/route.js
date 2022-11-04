const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
//const BookController= require("../controllers/bookController")
//const commonMW = require ("../middlewares/commonMiddlewares")
const ProductController =require("../controllers/productController")
const HeaderMiddleware = require("../middlewares/headerMiddleware")
const OrderController = require("../controllers/orderController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//Can we set the 'next' input parameter in a route handler?
//What is the primary difference between a middleware and a route handler?
//router.post("/createBook", commonMW.myMiddleware,BookController.createBook, function(req, res, next){
 //   res.send("Ending the cycle")
//}  )

router.post("/createUser", HeaderMiddleware.headerValidation, UserController.createUser)

//router.get("/dummy1", commonMW.myOtherMiddleware, UserController.dummyOne)

//router.get("/dummy2", commonMW.myOtherMiddleware, UserController.dummyTwo)

//router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)

//router.post("/createUser", HeaderMiddleware.headerValidation,UserController.createUser)

router.post("/createProduct", ProductController.createProduct)

router.post("/createOrder", HeaderMiddleware.headerValidation,OrderController.createOrder)

module.exports = router;