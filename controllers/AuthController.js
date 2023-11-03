// 1° PRECISA  IMPORTAR O ARQUIVO DE MODULO 
const User = require('../models/User')

module.exports = class AuthController{

    static login(request, response ){
        // Render => manda para um diretorio Pasta
        // Redirect => manda para uma rota (contem '/')

        return response.render('auth/Login')
    }

    static register(request, response ){
        return response.render('auth/Register')
    }

    static async registerPost(){}

}
