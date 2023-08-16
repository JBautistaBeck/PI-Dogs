const { Router } = require("express")
const { getDogsHandler, getDogsDetailByIdHandler, postDogsHandler } = require("../handlers/dogsHandlers")

const dogsRouter = Router()

//            (Ruta,Handler)
dogsRouter.get("/", getDogsHandler) //Aca adentro va la de buscar por nombre tambien (con query ( if(name) ...... )   )

dogsRouter.get("/:id", getDogsDetailByIdHandler)

dogsRouter.post("/", postDogsHandler)

module.exports = dogsRouter;