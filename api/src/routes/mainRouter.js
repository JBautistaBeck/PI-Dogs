const { Router } = require('express');


// Importar todos los routers;
const dogsRouter = require('./dogsRouter');
const temperamentsRouter = require('./temperamentsRouter');


const mainRouter = Router();


// Configurar los routers
mainRouter.use("/dogs", dogsRouter)
mainRouter.use("/temperaments", temperamentsRouter)



module.exports = mainRouter;
