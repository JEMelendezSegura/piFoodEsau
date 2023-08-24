const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {    //recetas =  https://api.spoonacular.com/recipes/complexSearch?apiKey=7727156576d94a4bae202ab459d94bf5&addRecipeInformation=true
      id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:false,
        unique:true,
      },
      title:{
        type:DataTypes.STRING,
        allowNull: false,
      },
      image:{
        type:DataTypes.STRING,
        allowNull: false,
      },
      sumary:{
        type:DataTypes.STRING,
        allowNull: false,
      },
      healthScore:{
        type:DataTypes.INTEGER,
        allowNull: false,
      },
      steps:{
        type:DataTypes.JSONB,
        allowNull: false,
      },
    },
  );
};
