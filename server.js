projectData={};

//Express to run server and routes
const express =require('express');

//Start up an instance of app
const app = express();

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

//add  http module 
const http = require('http');

const routing = require('./routing') ;  //export file routin


//server
const server = http.createServer(routing)


//setup server


server.listen(8000, '127.0.0.1',()=>{
  console.log("server runing....");

})
