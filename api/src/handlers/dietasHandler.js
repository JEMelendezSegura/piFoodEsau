const {getAllDiets} = require("../controllers/dietasControler");


const getAllDietsHandler = async(req, res)=>{
    try {
        const response = await getAllDiets();
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message}) 
        
    }
}


module.exports = {
    getAllDietsHandler,
}