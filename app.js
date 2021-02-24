const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    sayHello("Hello")
        .then(result =>
            res.send(result)
        )
        .catch(error => console.log(error))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

async function sayHello(hello){
    try {
        return hello
    } catch(e) {
        return e
    } 
}

