

const express = require("express");
const bodyParser = require("body-parser");



const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(req, res, next) {
    res.sendFile(__dirname + "/signup.html")
   
});

app.get("/success.html", function(req, res, next) {
    res.sendFile(__dirname + "/success.html")
   });

app.get("/signup.html", function(req, res, next) {
    res.redirect( "/")
  });


app.post("/", function(req, res) {
    

var firstName = req.body.fName;
var lastName = req.body.lName;
var email = req.body.email;

}); 


app.listen(process.env.PORT || 4000, function() {
    console.log("Server is running Bruh on port 4000");
}); 

