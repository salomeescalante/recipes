const router = require('express').Router()

const categoryServices = require('./categories.services')

router.route('/') //? /categories
    .get(categoryServices.getAllCategories)
    .post(categoryServices.postCategory)
    
//? /api/v1/categories/:id
router.get('/:id', categoryServices.getCategoryById)

module.exports = router
