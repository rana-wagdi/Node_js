const { response } = require("express")

function makeRequest(location) {
    return new Promise ((resolve,reject)=> {
        console.log(`Making request to ${location}`)
        if (location=='Google'){
            resolve('Google say hi')
            } else {
                reject('we can only talk to Google')

            }
    })
}

function processRequest(response){
    return new Promise((resolve,reject)=>{
        console.log('Processing response')
        resolve(`Extra Information +${response}`)
    })
}

makeRequest('Google').then(response=>{
    console.log('Response Received')
    return processRequest(response)
}).then(processedRequest => {
    console.log(processedRequest)
})