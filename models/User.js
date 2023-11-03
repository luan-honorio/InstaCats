
// importar sequeliza 
const {DataTypes}= require('sequelize')

const db = require('../db/conn')

//3 estrutura

const User = db.define('User', {
    name : {
        type : DataTypes.STRING,
        allowNull : false,
        require : true,
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false,
        require : true,
    },
    password : {
        type : DataTypes.STRING,
        allowNull: false,
        require : true

    }

    


})


// exportar modulos 


module.exports = User;