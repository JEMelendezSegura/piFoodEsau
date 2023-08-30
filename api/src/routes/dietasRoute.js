const {Router} = require("express")
const dietasRoute = Router();
const {getAllDietsHandler} = require('../handlers/dietasHandler');

dietasRoute.get("/", getAllDietsHandler);


module.exports = {
    dietasRoute,
}