const express = require('express');
const router = express.Router();
const productosController = require('../Controllers/productos.controller')
const Auth = require('../helper/auth')

// CREAR PRODUCTOS
router.post('/', Auth.verify, productosController.create)
router.get('/', Auth.verify, productosController.find);
router.get('/:id', Auth.verify, productosController.findOne);
router.put('/:id', Auth.verify, productosController.update);
router.delete('/:id', Auth.verify, productosController.remove);

module.exports = router;