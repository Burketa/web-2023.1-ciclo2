//Dotenv
require("dotenv/config")

//Importações de Modelos
require("./src/models/Character")

//App
const express = require('express')
const app = express()
app.use(express.json())

//BD
const mongoose = require("mongoose")
const database = "projetoweb"
const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.tuke9wk.mongodb.net/${database}?retryWrites=true&w=majority`
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Router
app.use("/api", require("./src/routes"))

//Bora servir :P
app.listen(3001, () => {
    console.log("escutando na porta 3001\n")
})