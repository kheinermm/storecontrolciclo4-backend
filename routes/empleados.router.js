const express = require('express');
const router = express.Router();
const empleadosController = require('../Controllers/empleados.controller')
const Auth = require('../auth/main_auth')

// CREAR EMPLEADO
router.post('/', Auth.verifyToken, empleadosController.create)
router.get('/', Auth.verifyToken, empleadosController.find);
router.get('/:id', Auth.verifyToken, empleadosController.findOne);
router.delete('/:id', Auth.verifyToken, empleadosController.remove);

module.exports = router;