const { Recipe, Diet } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const getAllDiets = async() => {
    const algo = "esau";
    return algo;
}


module.exports = {
    getAllDiets,
}