const http = require('http');
const fs =require('fs');
const url = require('url');

const server = http.createServer((req,res )=>{

    const path = url.parse(req.url).pathname
    console.log(path)

    //read file >>3
    fs.readFile('./index.html',null,(error,data)=>{
        if (error){
            res.end('file have error')
        }else{
            res.end(data)
        }
    })
});

server.listen(3000 , '127.0.0.1',()=>{
    console.log('server runing...')
})








