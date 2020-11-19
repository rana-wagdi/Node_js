const http = require('http');
const fs =require('fs');
const url = require('url');

const server = http.createServer((req,res )=>{

const path = url.parse(req.url).pathname

switch(path){
    case '/':
        handlerequest('index.html',res)
        break;
    case '/any':
        res.end('any page');

        break;
    case '/user':
        res.end('user page')
        break;

    default:
        res.end('this page not found');
        break;
}

});
server.listen(3000 , '127.0.0.1',()=>{
    console.log('server runing...')
})

function handlerequest(filepath,res){
        //read file >>3
        fs.readFile('./index.html',null,(error,data)=>{
            if (error){
                res.end('file have error')
            }else{
                res.end(data)
            }
        })
    }







/*
*/


