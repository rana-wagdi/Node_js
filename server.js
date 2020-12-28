projectData={};
//Express to run server and routes
const express =require('express');

//Start up an instance of app
const app = express();

const jsonData ={count:12, message:'hey'};

var fs = require('fs')
app.get('/',function(req,res){
  fs.readFile('index.html',function(err,buffer){


    res.setHeader('Content-Type','text/html')
    res.send(html);
  })
  //res.sendFile takes an absoulte path to a file and
  //sets the mime type based n the file extname
  //res.sendFile(__dirname+'/index.html',function(err){
  //  if(err){
    //  res.sendStatus(500).send(err);
   // }
  //})
});

app.get('/data',function(req, res){
  res.json(jsonData);
})
/*Dependencies */
const bodyParser = require('body-parser')

//Middleware
//Here we are configuring express to use body-parser

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//cors for cross origin allowance
const cors=require('cors');
app.use(cors());

//Intialize the main project folder
app.use(express.static('website'));

const port=8000;
//spin up the server


//
const server = app.listen(port, listening);
function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
};
