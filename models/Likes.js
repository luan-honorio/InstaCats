const {DataTypes, INTEGER} = require('sequelize');

const db = require('../db/conn');

// importar as tabelas 
const User = require('./User');
const Publication = require('./Publication');

// objeto 
const Like = db.define("Like", {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    }
});


User.belongsToMany(Publication, {through : 'Like'});
Publication.belongsToMany(User, {through : 'Like'});

module.exports = Like;