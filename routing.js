const fs = require('fs');

const url = require('url');

function handlerequest(filepath,res){
    fs.readFile('./index.html',null,(error , data)=>{
      if(error){
        res.end('file have error')
      }else{
        res.end(data)
      }
    })
  }

  function routing(req,res){

        const path = url.parse(req.url).pathname
      
        switch(path){
          case '/':
            handlerequest('index.html',res)
            
            break;
          case '/any':
            handlerequest('test.html',res)
            break;
          default:
          res.end('this page not found');
          break;
        }
      }
  
module.exports = routing;