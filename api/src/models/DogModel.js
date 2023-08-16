const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('DogModel', {
    id:{
      type: DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4,
      allowNull:false
    },
    image:{
      type: DataTypes.TEXT,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    minHeight:{
      type:DataTypes.INTEGER,
      validate: {min:1, max:100},
      allowNull:false
    },
    maxHeight:{
      type:DataTypes.INTEGER,
      validate: {min:1, max:100},
      allowNull:false
    },
    minWeight:{
      type:DataTypes.INTEGER,
      validate: {min:1, max:100},
      allowNull:false
    },
    maxWeight:{
      type:DataTypes.INTEGER,
      validate: {min:1, max:100},
      allowNull:false
    },
    lifeSpan:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    created:{//Para despues poder buscar por si es creado o de la API
      type:DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  {
    timestamps: false,
  });
};
