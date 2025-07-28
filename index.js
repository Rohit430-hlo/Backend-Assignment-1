// const express = require('express');

// const app = express();

// app.listen(3000 , ()=>{
//     console.log("App is Running")
// })


const express = require('express')
const app = express();

// Load Config from env file
require('dotenv').config();
const PORT = process.env.PORT || 4000 ;

//middleware to parse json
app.use(express.json());

// import Routes from TODO API
const todoRoutes = require('./routes/todoRoute')

// mount the todo API routes
app.use('/api/v1' , todoRoutes)

app.listen(PORT , ()=>{
    console.log(`Server is Running Successfully at ${PORT}`)
})

// connect to the DataBAse

const dbConnect = require('./config/dataBase')
dbConnect()

// Default Routes

app.get('/' , (req , res)=>{
    res.send('<h1>This is Home Page Darling</h1>')
})