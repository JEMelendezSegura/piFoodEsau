const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {recetasRoute} = require("./recetasRoute");
const {dietasRoute} = require('./dietasRoute');


const routes = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
routes.use('/recipes', recetasRoute);
routes.use('/diets', dietasRoute);


module.exports = routes;

//? ENDPOINTS PERMITIDOS

/*  1. recetas = https://api.spoonacular.com/recipes/complexSearch?apiKey=7727156576d94a4bae202ab459d94bf5  //!recetas
    2. mas iformación sobre las recetas: https://api.spoonacular.com/recipes/complexSearch?apiKey=7727156576d94a4bae202ab459d94bf5&addRecipeInformation=true
    3. Search By 'ID': "https://api.spoonacular.com/recipes/{id}/information?apiKey=7727156576d94a4bae202ab459d94bf5
    


*/

