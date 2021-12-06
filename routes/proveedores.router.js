const express = require('express');
const router = express.Router();
const proveedoresController = require('../Controllers/proveedores.controller')
const Auth = require('../helper/auth')

// CREAR EMPLEADO
router.post('/', Auth.verify, proveedoresController.create)
router.get('/', Auth.verify, proveedoresController.find);
router.get('/:id', Auth.verify, proveedoresController.findOne);
router.put('/:id', Auth.verify, proveedoresController.update);
router.delete('/:id', Auth.verify, proveedoresController.remove);

module.exports = router;