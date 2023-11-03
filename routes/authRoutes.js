
const express = require('express');
const route = express.Router();


const AuthController =  require('../controllers/AuthController')

route.get('/login', AuthController.login)
route.get('/register', AuthController.register)
route.post('')


module.exports = route