const express = require('express');
const router = express.Router();
const bookingData= require("../controllers/bookController.js")

router.post("/createBook",bookingData.createBook);

router.get("/bookList",bookingData.bookList);

router.post("/getBooksYear",bookingData.getBookYear);

router.post("/getParticularBooks",bookingData.getParticularBooks);

router.get("/getXINRBooks",bookingData.getXINRBooks);

router.get("/getRandomBooks",bookingData.getRandomBooks);

//  const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
// const BookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

module.exports = router;