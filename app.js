const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let fullNameNumber = addLastName('Betty')
    res.send(fullNameNumber)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

function addNumber (fullName){
    return fullName + ' 1234'
}

function addLastName(name){
    let fullName = name + ' Smith'
    let fullNameNumber = addNumber(fullName)
    return fullNameNumber
}


