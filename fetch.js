const { json } = require('body-parser')
const fetch = require('node-fetch')
fetch('https://reqres.in/api/users', {
    method: 'POST',
    heafers: {
        'Content-Type':'application/json'
    },
    body: JSON.stringify ({
        name:'user 1'
    })
}).then(res=>{
    return res.json()
})
.then(data=>console.log(data))
.catch(error=>console.log('ERROR'))
