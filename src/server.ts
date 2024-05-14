import express from "express"
import "reflect-metadata"
const app = express()

app.get("/", (req, res) =>{
res.send("Ola Mundo ...")
})

app.get("/testa", (req, res) =>{
    res.send(" Sim ")
    })

app.listen(3000, () => {
 console.log("Aplicativo esta no ar")
})

// Para executar, digite node server.js
//Instalem a extrensão Thunder Client
