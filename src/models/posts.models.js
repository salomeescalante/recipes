const db = require('../utils/database')
const { DataTypes } = require('sequelize')
const Users = require('./users.models')
const Categories = require('./categories.models')

const Posts = db.define('posts', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,  //varchar
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //? Llave foranea de Users
    createdBy: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'created_by',
        references: {
            key: 'id',
            model: Users
        },
    },
    
    categoryId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'created_by',
        references: {
            key: 'id',
            model: Categories
        }
    }

} )

module.exports = Posts


//! procedimiento para hacer el clon en github:

//*  en terminal powershell = cd + carpeta donde se vaya a crear el proyecto
//*  git clone https//:...
//* ejectural npm install
//* copiar archivo .env

