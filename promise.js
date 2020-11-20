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

makeRequest('Facebook').then(response=>{
    console.log('Response Received')
    return processRequest(response)
}).then(processedResponse => {
    console.log(processedResponse)
}).catch(err => {
    console.log(err)
})

async function dowork() {
 const response= await  makeRequest('Google')
 console.log('Response Received')
const processedResponse= await processRequest(response)
console.log(processedResponse)
}
dowork()