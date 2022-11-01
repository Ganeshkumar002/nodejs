const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://ganeshkr002:M8mJDXmcwFbmg8tV@assigmntproject.x8wgtkt.mongodb.net/Ganesh3", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        let dateobj = new Date();
        let date =(dateobj.getDate())
        let month=((dateobj.getMonth()+1))
        let year =dateobj.getFullYear();
        let hours=dateobj.getHours();
        let minuts=dateobj.getMinutes();
        let seconds=dateobj.getSeconds();
        console.log(year + "-" + month +"-" + date + "-"+ hours +":"+ minuts + ":"+ seconds  );
        console.log ("inside GLOBAL MW");
        next();
  }
  );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
