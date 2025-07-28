const express = require('express')
const app = express(); 

require('dotenv').config();
const PORT = process.env.PORT || 4000 ;
app.use(express.json());

const todoRoutes = require('./routes/todoRoute')

app.use('/api/v1' , todoRoutes)

app.listen(PORT , ()=>{
    console.log(`Server is Running Successfully at ${PORT}`)
})

const dbConnect = require('./config/dataBase')
dbConnect()
app.get('/' , (req , res)=>{
    res.send('<h1>Be a Human</h1>')
})