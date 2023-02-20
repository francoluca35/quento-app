const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    console.log('peticion recibida')

    res.send('hola mundo')
})
    app.listen(4000, ()=>{
        console.log('holaaa puerto 4000')
    })