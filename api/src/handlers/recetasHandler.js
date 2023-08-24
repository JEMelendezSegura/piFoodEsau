const {getRecipeById} = require("../controllers/recetasControler");


const getDetailHandler = async(req, res) => {
    const {id} = req.params;
    try {
        const response = await getRecipeById(id);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    getDetailHandler,
}