const users = require('./users.models')
const Posts = require('./posts.models')
const Categories = require('./categories.models')
const Users = require('./users.models')

const initModels = () => {
// para relaciones(uno a uno, uno a muchos, etc)

    //*  UNO A MUCHOS
    //? Una publicación pertenece a un Usuario
    Posts.belongsTo(Users)
    //? Un usuario tiene muchas publicaciones
    Users.hasMany(Posts)

    //*  UNO A MUCHOS
    //? Una publicación pertenece a una categoría 
    Posts.belongsTo(Categories)
    //? Una categoría tiene muchas publicaciones
    Categories.hasMany(Posts)
    
} 
module.exports = initModels