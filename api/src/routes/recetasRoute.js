const {Router} = require("express")
const recetasRoute = Router();
const {getDetailHandler} = require("../handlers/recetasHandler")


recetasRoute.get('/:id', getDetailHandler);



module.exports = {
    recetasRoute,
}