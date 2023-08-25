const {Router} = require("express")
const recetasRoute = Router();
const {getDetailHandler, getAllRecipesHandler} = require("../handlers/recetasHandler")


recetasRoute.get('/:id', getDetailHandler);
recetasRoute.get('/', getAllRecipesHandler);



module.exports = {
    recetasRoute,
}