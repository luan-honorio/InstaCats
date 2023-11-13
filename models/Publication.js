const {DataTypes} = require('sequelize'); // => para definir os tipos na tabela 

// impostar connection => para conectar ao banco 
const bd = require('../db/conn')

// Meu model => modelo do banco de dados.
const Publication = bd.define('Publication',{ // recebe 2 paramtros O NOME E AS COLUNAS (OBJETO)
    Image : {
        type : DataTypes.STRING, 
        allowNull : false,
        require : true
    }
});

module.exports = Publication;