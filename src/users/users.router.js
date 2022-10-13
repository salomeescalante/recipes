const router = require('express').Router()

const userServices = require('./users.services')

//? rutas raiz

router.get('/', userServices.getAllUsers)

//todo: El reisterUser irá en la ruta /auth/register

//? rutas dinámicas por ID /users/:id

//! router.get('/:id')
//! router.patch'/:id')
//! router.put('/:id')
//! router.delete('/:id')

router.route('/.id')
    .get(userServices.getUserById)
    .patch(userServices.patchUser)
    .delete(userServices.deleteUser)

    module.exports = router