const { Recipe, Diet } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const getAllDiets = async() => {
    const allDiets = [];
    const infoFromApi = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)).data.results;
    allDiets.push(...Object.keys(infoFromApi[0]).slice(0,4));
    infoFromApi.map((recipe)=>{
        allDiets.push(...recipe.diets);
    })    
    const filterDiets = [...new Set(allDiets)];
    return filterDiets;
}


module.exports = {
    getAllDiets,
}