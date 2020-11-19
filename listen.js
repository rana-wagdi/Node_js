const port = 8000;

const server = app.listen(port, listening);

function listening(){
    console.log("server runing");
    console.log("runing on localhost:${port}");
}