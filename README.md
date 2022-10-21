# SKELETON

- Express
- PostgreSQL
- Sequeliza ORM
- Autentication con Tokens
- Bcrypt para hashear sontraseñas
- Uso de Json web Token

---

- Rutas de Login y creacion de usuario ( register )
- Herramienta para publicar imagenes de perfil
- CRUD de usuarios don autenticacion y manejo de permisos
- /users/:id DELETE, PUT etc
- /users/me



Orden

1. app.js
2. .env
3. config.js
4. database.js
5. models
6. controllers
7. services
8. router


# Blog API

Qué acciones quiero que el front haga?: 

- Front: 
    - Obtener todas las publicaciones
    - Obtener una en específico
    - Obtener todas las categorias
    - Obtener todos los post de una categoría en específico
    - Obtener todos los post que he creado
    - Obtener todos los post de un usuario en específico
    - Podemos paginar los post
    - Acciones de CRUD sobre posts
    - Crear categorias

Sintáxis para mostrar todo lo que tenemos:

``` json
{
    "total": 68,
    "prev": "localhost:9000/api/v1/posts?start=51&limit=60",
    "next": "localhost:9000/api/v1/posts?start=61&limit=68",
    "data": [
        {

            "id": "1",
            "title!: "ejemplo",
            "content": "lorem ipsum",
            "createdBy": {
                "id": "5211660b-f321-4300-9a64-017735af753c",
                "name" : "German",
                "email": "gramirezdeveloper39@gmail.com"
            },
            "category": {
                "id": "a847bb4e-80ca-4516-94b2-c133e3f9dd48",
                "name" : "Tecnología"

            }

        }
    ]
}
```

/api/v1

/users

    - /me
    - /me/posts
    - /me/posts/:id
    - /:id
/categories
    -/:id
    -/:id/posts

/posts
    -/:id
    