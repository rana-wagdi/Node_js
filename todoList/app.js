const bodyParser = require("body-parser");
const express = require("express");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));

var items = ["food", "watch tv", "cooking"]
app.set('view engine', 'ejs');

app.get("/", function(req, res){

    var today = new Date();

    var option ={
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    var day = today.toLocaleDateString("en-Us", option);
    res.render("list", {kindOfDay:day, nameListItems:items} )
})

app.post('/', function(req, res){
    itemName = req.body.itemInput;
    items.push(itemName);
    res.redirect('/');
})


app.listen(3000, function(){
    console.log("Server is running on port 3000")
})