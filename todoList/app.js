const express = require("express");

const app = express();


app.get("/", function(req, res){

    var today = new Date();

    var option ={
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    var day = today.toLocaleDateString("en-Us", option);
    res.send("<h1>day</h1>")
})


app.listen(3000, function(){
    console.log("Server is running on port 3000")
})