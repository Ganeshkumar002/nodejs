let players = [
    {
      name: "Ganesh",
      dob: "10/08/2000",
      gender: "male",
      city: "Bihar",
      sports: ["Cricket"],
    },
    {
      name: "Abhishek",
      dob: "02/01/2000",
      gender: "male",
      city: "UP",
      sports: ["Volleyball"],
    },
    {
      name: "Pankaj",
      dob: "11/08/2001",
      gender: "male",
      city: "Kolkata",
      sports: ["swimming"],
    }
  ];
  
  
  router.post("/players",function (req, res) {
    console.log(players)
    let newp = req.body;  //dataa will come in body
    // play name will not be repeted in array

    let find =req.body.name;
    console.log("New Players Found :- ",newp)
    for ( let i of players) {
        if (i.name == find) {
             res.send("name already exists")   
        }
    }
    players.push(newp)
    res.send({ msg: players, status: true })
  } )
  module.exports = router;