
//? Dependencies

require('dotenv').config()



const config = {
    port: process.env.PORT || 9000,  //? process para acceder a variables de entorno
    nodeEnv: process.env.NODE_ENV || 'development', //? Desarrollo, testing, produccion
    db: {
        host: process.env.DB_HOST || 'localhost',
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASS || 'Nievelina2505',
        dbName: process.env.DB.NAME
    }

}

module.exports = config