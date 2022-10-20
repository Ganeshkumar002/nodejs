const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})



router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
}) 
  
// post assigmnt==================================================================================================


    let players = [
    {
       "name": "Ganesh",
      "dob": "10/08/2000",
      "gender" : "male",
      "city": "Bihar",
      "sports": ["Cricket"],
    },
    {
      "name": "Abhishek",
      "dob": "02/01/2000",
      "gender": "male",
      "city": "UP",
      "sports": ["Volleyball"],
    },
    {
      "name": "Pankaj",
      "dob": "11/08/2001",
      "gender": "male",
      "city": "Kolkata",
      "sports": ["swimming"],
    }
  ];

  router.post('/players', function(req,res){
    const body = req.body
    playersDetails=players.find(player => player.name===body.name)
    if(playersDetails){
        res.send({massage:"player already exist"})
    }else 
    { players.push(body)

        res.send(players)
            
    }

  })
  



module.exports = router;




