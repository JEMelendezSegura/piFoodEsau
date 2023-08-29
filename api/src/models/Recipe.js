const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {    //recetas =  https://api.spoonacular.com/recipes/complexSearch?apiKey=7727156576d94a4bae202ab459d94bf5&addRecipeInformation=true
      id:{
        type: DataTypes.UUID, //Es una convinación de letras números y guiones (código alfanumérico)
        defaultValue: DataTypes.UUIDV4,   //UUIDV4 es el algoritmo para crear el di aleatorio, consta de 32 dígitos hexadecimales separados por guiones, como por ejemplo: f47ac10b-58cc-4372-a567-0e02b2c3d479
        primaryKey: true,
        allowNull: false,
      },
      title:{
        type:DataTypes.STRING,
        allowNull: false,
      },
      image:{
        type:DataTypes.STRING,
        allowNull: false,
      },
      summary:{
        type:DataTypes.TEXT,
        allowNull: false,
      },
      healthScore:{
        type:DataTypes.INTEGER,
        allowNull: false,
      },
      diets:{
        type:DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      steps:{
        type:DataTypes.ARRAY(DataTypes.JSON),
        allowNull: false,
      },
    },
  );
};
