const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const MiddleWare = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", UserController.createUser)

router.post("/login", UserController.login)

//The userId is sent by front end
router.get("/users/:userId",MiddleWare.authenticate,MiddleWare.authorize,UserController.getUser)
//router.post("/users/:userId/posts", userController.postMessage)

router.put("/users/:userId",MiddleWare.authenticate,MiddleWare.authorize,UserController.updateUser)
router.delete('/users/:userId',MiddleWare.authenticate,MiddleWare.authorize,UserController.deleteUser)
router.put("/users/:userId",MiddleWare.authenticate,MiddleWare.authorize,UserController.userPost)

module.exports = router;