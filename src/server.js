const express = require("express")

const app = express()

//(,)=>{} função anonima

app.get("/einfo",(req,res)=>{
    res.send("Hello, Word!") //exibido ao acessar a rota
}) //rota

app.listen(3333,()=>{
    console.log("servidor rodando na porta 3333")
})