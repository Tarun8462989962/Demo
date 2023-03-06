const express = require('express')
const app = express()

app.get('/' ,(req ,res ,next)=>{
    res.send("Hello from Tarun")
})


app.listen(4000 , (req , res ,next)=>{
    console.log("Server running at 4000 port")
})