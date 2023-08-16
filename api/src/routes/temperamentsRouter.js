const { Router } = require("express");
const { getTemperamentsHandler } = require("../handlers/temperamentsHandlers");

const temperamentsRouter = Router()

//                    (Ruta,Handler)
temperamentsRouter.get("/", getTemperamentsHandler)

module.exports = temperamentsRouter;