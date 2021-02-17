const { request, response } = require("express");
const express = require("express");

const app =express();

app.get("/", function(request,response){
response.send("<h1>hello world!</h1>");
});

app.get('/contact', function(request, response){
    response.send("Contact me at: ranawagdi@gmail.com")
});

app.get('/about', function(request, response){
    response.send("<p>my name is Rana <br> I graduate 2020</p>")
})

app.listen(3000,function(){
    console.log("server started on port 3000")
});