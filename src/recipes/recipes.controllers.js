const Recipes = require('../models/recipes.models')

const getAllRecipes = async () => {
    const data = await Recipes.findAll()
    return data
}

const getRecipesById = async (id) => {
    const data = await Recipes.finOne({
        where: {
            id
        }

    })
    return data    
}

const createRecipe = async (name) => {
    const data = await Categories.create({
        name
    })
    return data
}

const deleteRecipe = async (id) => {
    const data = await Recipes.destroy({
        where: {
            id
        }
    })
    return data
}

module.exports = {
    getAllRecipes,
    getRecipesById,
    createRecipe,
    deleteRecipe
}