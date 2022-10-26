// const express = require('express');
// const router = express.Router();
// const UserModel= require("../models/userModel.js")

// const UserController= require("../controllers/userController");
// //const { getbookSchema } = require('../controllers/bookController.js');
// //const BookController= require("../controllers/bookController")


// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser )

// router.get("/getUsersData", UserController.getUsersData)

// //router.post("/createBook",BookController.createBook)

// //router.get("/getBooksData",BookController.getBooksData)

// module.exports = router;


const express = require('express');
const bookModel = require('../models/bookmodel');
const router = express.Router();

const bookmodel=require('../models/bookmodel')

router.post("/createbook",async(req,res)=>{
    let data=req.body;
    let saveData=await bookmodel.create(data)
    res.send({print:saveData})
}
)
router.get("getbook",async(req,res)=>{
    let book=await bookModel.find()
    res.send({print:book})
})


module.exports = router;