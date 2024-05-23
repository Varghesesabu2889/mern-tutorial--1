const express = require('express')
const dotenv = require('dotenv').config()

const port = process.env.PORT || 8000
const app = express()


//using simple 
// app.get('/api/goals',(req,res)=>{
//     res.send(`It's a Goal`)
// })

//using json 
// app.get('/api/goals',(req,res)=>{
//     res.json({
//         message:`It's a Goal`
//     })
// })
//using json and with status code
app.get('/api/goals',(req,res)=>{
    res.status(201).json({
        message:`It's a Goal`
    })
})



























app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})