const express = require('express');
const router = express.Router();
const empleadosController = require('../Controllers/empleados.controller')
const Auth = require('../helper/auth')

// CREAR EMPLEADO
router.post('/', Auth.verify, empleadosController.create)
router.get('/', Auth.verify, empleadosController.find);
router.get('/:id', Auth.verify, empleadosController.findOne);
router.put('/:id', Auth.verify, empleadosController.update);
router.delete('/:id', Auth.verify, empleadosController.remove);

module.exports = router;