const bcrypt = require('bcrypt')


//? Encripta la contraseña del usuario cuando se crea o se modifica la contraseña
const hashPassword = ( plainPassword ) => {
    return bcrypt.hashSync(plainPassword, 10)
  
}

//? Comparar si la contraseña root es a = $2b$10$c36zH1/mkCNMIuGs6r1UTOsrfhndIEZLCyQHRa0YfpAYLclRUeZcS
const comparePassword = (plainPassword, hashedPassword) => {

    //* PlainPassword : contraseña que recibimos del Login
    //* hashedPassword: contraseña que tenemos guardada en la DB
    
    //! Esta funcion se usa cuando se hace un login, recibimos la contraseña del usuario y la comparamos 
    //! con la que tenemos en la DB
    return bcrypt.compareSync(plainPassword, hashedPassword)
}

// console.log(hashPassword('root'))

// console.log(comparePassword('root', '$2b$10$c36zH1/mkCNMIuGs6r1UTOsrfhndIEZLCyQHRa0YfpAYLclRUeZcS'));

module.exports = {
    hashPassword,
    comparePassword
}