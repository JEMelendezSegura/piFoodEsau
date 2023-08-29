const {Router} = require("express")
const recetasRoute = Router();
const {getDetailHandler, getAllRecipesHandler, postRecipesHandler } = require("../handlers/recetasHandler")


recetasRoute.get('/:id', getDetailHandler);
recetasRoute.get('/', getAllRecipesHandler);
recetasRoute.post('/', postRecipesHandler);




module.exports = {
    recetasRoute,
}