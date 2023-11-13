const {DataTypes} = require('sequelize');

const bd = require('../db/conn');

const User = require('./User');
const Publication = require('./Publication');


const Comment = bd.define("Comment", {
        Comment : {
            type : DataTypes.STRING,
            allowNull : false,
        }
});


User.belongsToMany(Publication, { through : 'Comment'})
Publication.belongsToMany(User, {through : "Comment"})

module.exports = Comment;