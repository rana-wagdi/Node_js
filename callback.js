const posts=[
    {title: 'Post one',
    body:'This is post one'},
    {title:'Post Two',
    body:'This is post two'}
];
function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
        output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML=output;
},1000);
}

function creatPost(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();

    },2000);
}
creatPost({title:'Post three',
            body:'this is post three'},getPosts);