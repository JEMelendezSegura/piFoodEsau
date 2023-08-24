const { Recipe, Diet } = require("../db");
const axios = require("axios");

const getRecipeById = async (id) => {
    //para llamar a la ap, usamos axios.
    const detail = (await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=7727156576d94a4bae202ab459d94bf5`))
            .data;
    return detail;
  };

  module.exports = {
    getRecipeById,
  }