

const dotenv = require("dotenv").config() //eslint-disable-line

const express = require("express") //eslint-disable-line

const cors = require("cors") //eslint-disable-line
const importData = require("./data.json")//eslint-disable-line
const app = express()
const PORT = process.env.PORT||3000 //eslint-disable-line

app.use(express.json())
app.use(cors())


app.get("/", (req,res)=>{
    res.json({data: "The API is working"})
})

app.get("/users", (req, res)=>{
    res.send(importData)
})
app.use((err, req, res, next)=>{ //eslint-disable-line

    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})


app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}`)
})