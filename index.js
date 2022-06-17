
const express = require('express')
const axios = require('axios')

const app = express()

const port = 5050

app.get('/', (req,res) => {
    res.send('hola mundo')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})