const fetch = require('node-fetch')
let a =1
let b =2

setTimeout(function(){
    console.log('Asyns')
},4000)

fetch('/').then(function(){
    console.log('Fetch')
})