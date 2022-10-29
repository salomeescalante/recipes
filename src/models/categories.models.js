  
 const { DataTypes } = require('sequelize')
 const db = require('../utils/database')
 
 const Categories = db.define('categories' , {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, 
      unique: true
    }
 }, {
   //? Evita que sequelize agregue las columnas de createdAt y updatedAt
    timestamps: false
 })

 module.exports = Categories