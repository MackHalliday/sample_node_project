const express = require('express')
const app = express()
const port = 3000

function addNumber(number){
    return number + number
}

app.get('/', (req, res) => {
    addNumber(2)
        .then(result =>
            res.send(result)
        )
        .catch(error => res.send("Ops!"))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



function addAnotherNumber(number){
    return number + 3
}


