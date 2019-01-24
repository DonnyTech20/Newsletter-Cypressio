
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
    

var firstName = req.body.fName;
var lastName = req.body.lName;
var email = req.body.email;

var data = {
 members: [
     {
     email_address: email,
     status: "subscribed",
     merge_fields: { 
        FName: firstName,
        LName: lastName
     }
     
    }
 ]   
};

var jsonData = JSON.stringify(data);

var options = {
    url: "https://us20.api.mailchimp.com/3.0/lists/6e26dc55f1",
    method: "POST",
    headers: {
        "Authorization": " DonnyTech e1dda5868fe9bc5a940ab3a0257196e6-us20" 
    },
    body: jsonData
};

request(options, function(error, response, body) {
    if (error) {
        res.sendFile(__dirname + "/failure.html");
    } else {
        if(response.statusCode === 200) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }
    }
});


});

app.post("/failure", function(req, res) {
    res.redirect("/");
});

app.listen(process.env.PORT || 4000, function() {
    console.log("Server is running Bruh on port 4000");
});


// API Key
// e1dda5868fe9bc5a940ab3a0257196e6-us20

// List id
// 6e26dc55f1        