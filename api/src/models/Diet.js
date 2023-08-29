const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Diet', {
    id:{
      type: DataTypes.UUID, //Es una convinación de letras números y guiones (código alfanumérico)
      defaultValue: DataTypes.UUIDV4,   //UUIDV4 es el algoritmo para crear el di aleatorio, consta de 32 dígitos hexadecimales separados por guiones, como por ejemplo: f47ac10b-58cc-4372-a567-0e02b2c3d479
      primaryKey: true,
      allowNull: false,
    },
    name:{
      type:DataTypes.STRING,
      allowNull: false,
    },
  });
};