const { Recipe, Diet } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;
const { Sequelize } = require('sequelize');


const getRecipeById = async (id) => {
  if(id.length < 25){
    const infoFromApi = (
    await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
    )
  ).data;
  const recipeApi = {
    id: infoFromApi.id,
    title: infoFromApi.title,
    image: infoFromApi.image,
    summary: infoFromApi.summary,
    healthScore: infoFromApi.healthScore,
    diets: infoFromApi.diets,
    steps: infoFromApi.analyzedInstructions[0].steps.map((infoSteps)=>{
      return {
        number: infoSteps.number,
        step: infoSteps.step,
      }
    })
  }
  return recipeApi;
} else {
  const recipeDb = await Recipe.findByPk(id, {
    include: {
      model: Diet,
    }
  })
  return recipeDb;
}
};

const getRecipeByName = async (name) =>{
  if(!name || name === ""){   //! obtengo todoas las dietas de DB y api
    const allRecipesDb = await Recipe.findAll();
    const allRecipesApi = (await axios.get(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`)).data.results;
    return [...allRecipesDb,...allRecipesApi];
  } else {

    const infoFromApi = (await axios.get(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`)).data.results;
    const recipesApi = infoFromApi.filter(recipe => recipe.title.toLowerCase().includes(name.toLowerCase()));
    const recipesDB = await Recipe.findAll({ where: { title: { [Sequelize.Op.iLike]: `%${name}%`} } });
    return [...recipesApi, ...recipesDB];
  }
}

const postRecipe = async(title, image, summary, healthScore, diets, steps) =>{
  return Recipe.create({title, image, summary, healthScore, diets, steps})
}

module.exports = {
  getRecipeById,
  getRecipeByName,
  postRecipe,
};


// dirección para probar https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5


//dirección1 del getRecipeByName https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100
//direccion2 del getRecipeByName https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100
