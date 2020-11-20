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
app.use(express.static('demo'));

const port=8000;
//spin up the server
const server = app.listen(port,listening);

//
const server = app.listen(port, listening);
function listening(){
    // console.log(server);
    console.log(`running on localhost: ${port}`);
};
const data = [];
app.post('/flavor', addFlavor);

function addFlavor (req, res) {
  data.push(req.body);
};