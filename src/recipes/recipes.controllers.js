const uuid = require('uuid')
const Recipes = require('../models/recipes.models')
const Users = require('../models/users.models')
const Categories = require('../models/categories.models')
const Instructions = require('../models/instructions.models')
const RecipeIngredients = require('../models/recipes_ingredients.models')
const Ingredients = require('../models/ingredients.models')
const Types = require('../models/types.models')


const getAllRecipes = async () => {
    const data = await Recipes.findAll({
        attributes: {
            exclude: ['userId', 'categoryId', 'createdAt', 'updatedAt']
        },
        include: [
            {
                model: Categories
            },
            {
                model: Users,
                attributes: ['id', 'firstName', 'lastName']
            },
            {
                model: Instructions,
                attributes: ['step', 'description']
            },
            {
                model: RecipeIngredients,
                include: {
                    model: Ingredients,
                    include: {
                        model: Types
                    }
                }
            }
        ]

    })
    return data
}

const getRecipeById = async (id) => {
    const data = await Recipes.findOne({
        where: {
            id
        }
    })
    return data
}

const createRecipe = async (data) => {
    const response = await Recipes.create({
        id: uuid.v4(),
        title: data.title,
        description: data.description,
        urlImg: data.urlImg,
        time: data.time,
        portions: data.portions,
        userId: data.userId,
        categoryId: data.categoryId,
        origin: data.origin,
        likes: data.likes
    })
    return response
}

const updateRecipe = async (id, data) => {
    const response = await Recipes.update(data, {
        where: {
            id
        }
    })
    return response
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
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
}