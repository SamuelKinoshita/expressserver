const express = require("express")
const path = require("path")

const app = express()
const router = express.Router()

router.get("/",(req,res)=>{
    res.sendFile(__dirname + "/pages/home.html")
})

router.get("/contato",(req,res)=>{
    res.sendFile(__dirname + "/pages/contato.html")
})

app.use(router)

app.listen(process.env.Port || 3000, ()=> {
    console.log("servidor estar rodando")
})

console.log()
