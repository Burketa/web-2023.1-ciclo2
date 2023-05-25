//Importações
const express = require("express")
const middlwares = require("./middlewares")
const routes = express.Router()
const CharacterController = require("./controllers/CharacterController")
const ItemController = require("./controllers/ItemController")
const CreatureController = require("./controllers/CreatureController")

//Middleware para logar os requests
routes.use(middlwares.logRequest)

//Rotas (CRUD)
routes.get("/character", CharacterController.showAll)
routes.post("/character", CharacterController.create)
routes.get("/character/:id", CharacterController.read)
routes.put("/character/:id", CharacterController.update)
routes.delete("/character/:id", CharacterController.delete)

routes.get("/item", ItemController.showAll)
routes.post("/item", ItemController.create)
routes.get("/item/:id", ItemController.read)
routes.put("/item/:id", ItemController.update)
routes.delete("/item/:id", ItemController.delete)

routes.get("/creature", CreatureController.showAll)
routes.post("/creature", CreatureController.create)
routes.get("/creature/:id", CreatureController.read)
routes.put("/creature/:id", CreatureController.update)
routes.delete("/creature/:id", CreatureController.delete)

//Exportando as rotas para serem usadas no server.js
module.exports = routes