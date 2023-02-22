const express = require('express')
const  mongoose = require('mongoose')
const path = require('path')
require('dotenv').config()


const app = express()

mongoose.connect(
    'mongodb+srv://FRANCO1234:PeiKcdqzbgHcefe1@developets.pnvogln.mongodb.net/stock-app?retryWrites=true&w=majority'
    )
    .then((result)=>{ console.log('conexion exitosa a la MGDB')})
    .catch((err)=> console.log(err))

    const productSchema = mongoose.Schema(
    {
        nombre:{type:String, require:true},
        precio: Number,
    },
    {timestamps:true}
    )

    const Product = mongoose.model('product', productSchema)

app.use(express.json())

    app.post('/api/v1/products', (req,ren)=>{

        const newProduct=new Product(req.body)
            
       newProduct
       .save()
       .then( (result)=>{
        res.status(201).json({ok:true})
       })
       .catch((err) => console.log(err))

        
    })

app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res)=>{
    console.log('peticion recibida')

    res.status(200).sendFile('index.html', {root: __dirname})
})

const PORT = process.env.PORT

    app.listen(PORT, ()=>{
        console.log('holaaa puerto', PORT)
    }) 