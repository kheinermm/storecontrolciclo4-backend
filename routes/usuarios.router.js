const express = require('express')
const router = express.Router()
const usuariosController = require('../Controllers/usuarios.controller')
// const Auth = require('../auth/main_auth')


router.post("/login", usuariosController.login)
router.post("/register", usuariosController.register)

// router.get("/", Auth.verifyToken, usuariosController.listarUsuarios)
// listar usuarios con token de usuario admin

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//     res.send('respond with a resource');
//   });

module.exports = router;