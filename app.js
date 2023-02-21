require('dotenv').config()

const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    console.log('peticion recibida')

    res.send('hola mundo')
})

const PORT = process.env.PORT || 4000

    app.listen(PORT, ()=>{
        console.log('holaaa puerto', PORT)
    }) 