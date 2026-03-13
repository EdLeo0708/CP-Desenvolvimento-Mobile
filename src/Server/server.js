const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

let jogos = []

app.get("/jogos",(req,res)=>{
 res.json(jogos)
})

app.post("/jogos",(req,res)=>{

 const jogo = req.body

 jogos.push(jogo)

 res.json(jogo)

})

app.post("/pontuacao",(req,res)=>{

 const dados = req.body

 res.json(dados)

})

app.listen(3000,()=>{
 console.log("API rodando")
})