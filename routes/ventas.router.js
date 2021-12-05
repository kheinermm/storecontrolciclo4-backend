const express = require('express');
const router = express.Router();
const ventasController = require('../Controllers/ventas.controller')
const Auth = require('../helper/auth')

// CREAR VENTA
router.post('/', Auth.verify, ventasController.create)
router.get('/', Auth.verify, ventasController.find);
router.get('/:id', Auth.verify, ventasController.findOne);
router.put('/:id', Auth.verify, ventasController.update);
router.delete('/:id', Auth.verify, ventasController.remove);

module.exports = router;