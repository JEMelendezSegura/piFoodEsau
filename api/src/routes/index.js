const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {recetasRoute} = require("./recetasRoute");


const routes = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
routes.use('/recipes', recetasRoute);


module.exports = routes;
