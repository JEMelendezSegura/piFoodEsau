// const { Recipe, Diet } = require("../db");
// const axios = require("axios");
// const { API_KEY } = process.env;

// const getAllDiets = async() => {
    
//     const allDiets = [];
//     //dbCount para verificar si la DB se encuentra vacía.
//     const dbCount = await Diet.count();

//     if(dbCount === 0){
//         // const infoFromApi = (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)).data.results;
//         const infoFromApi = (await axios.get(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`)).data.results;

//         allDiets.push(...Object.keys(infoFromApi[0]).slice(0,4));
//         infoFromApi.map((recipe)=>{
//             allDiets.push(...recipe.diets);
//         })    
//     } else {
//         const dbDiets = await Diet.findAll();
//         dbDiets.map((diet)=>{
//             allDiets.push(diet.name)
//         })
//     }
//     const filterDiets = [...new Set(allDiets)];
//     const arrayOfDiets = filterDiets.map((diet)=>{
//         return{ name: diet}
//     })

//     const createDietsDB = await Diet.bulkCreate(arrayOfDiets);
//     const dbDiets = await Diet.findAll();
//     return dbDiets;
// }


// module.exports = {
//     getAllDiets,
// }


const { Recipe, Diet } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;

const getAllDiets = async () => {
  const dbCount = await Diet.count();

  if (dbCount === 0) {
    const infoFromApi = (
      await axios.get(
        `https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`      //!cambiar por la url de spoon
      )
    ).data.results;

    
    const dietNamesFromApi = [];
    
    dietNamesFromApi.push(...Object.keys(infoFromApi[0]).slice(0,4));

    infoFromApi.forEach((recipe) => {
      recipe.diets.forEach((diet) => {
        dietNamesFromApi.push(diet);
      });
    });

    const uniqueDietNamesFromApi = [...new Set(dietNamesFromApi)];

    const arrayOfDiets = uniqueDietNamesFromApi.map((diet) => {
      return { name: diet };
    });

    const createDietsDB = await Diet.bulkCreate(arrayOfDiets);
    const dbDiets = await Diet.findAll();
    return dbDiets;
  } else {
    const dbDiets = await Diet.findAll();
    return dbDiets;
  }
};

module.exports = {
  getAllDiets,
};
