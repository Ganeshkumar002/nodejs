const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const tokenValidator=require("../middleWares/tokenValidate")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", UserController.createUser  )

router.post("/login", UserController.login)

//The userId is sent by front end
router.get("/users/:userId",tokenValidator.validateToken,UserController.getUser)

router.put("/users/:userId",tokenValidator.validateToken,UserController.updateUser)
router.delete("/users/:userId",tokenValidator.validateToken,UserController.deleteUser)

module.exports=router;