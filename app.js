const express = require('express')
const app = express()
const port = 3000

async function addNumber(number){
    try {
        return number + number
    } catch(e) {
        return e
    } 
}

app.get('/', (req, res) => {
    addNumber(2)
        .then(result =>
            res.sendStatus(result)
        )
        .catch(error => res.sendStatusç("Ops!"))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



async function addAnotherNumber(number){
    return number + 3
}


