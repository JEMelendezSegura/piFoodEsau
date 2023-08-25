const {getRecipeById, getRecipeByName} = require("../controllers/recetasControler");


const getDetailHandler = async(req, res) => {
    const {id} = req.params;
    try {
        const response = await getRecipeById(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const getAllRecipesHandler = async(req, res) => {
    const {name} = req.query;
    try {
        const response = await getRecipeByName(name);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message})   //!cambiar a mensaje adecuado tipo texto      
    }
}



module.exports = {
    getDetailHandler,
    getAllRecipesHandler,
}