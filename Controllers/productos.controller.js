const Producto = require('../models/productos.model');

let response = {
    msg: "",
    exito: false
}

//CREA NUEVO PRODUCTO
exports.create = function (req, res) {
    let producto = new Producto({
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
        stockMinimo: req.body.stockMinimo
    })
    //GUARDA PRODUCTO
    producto.save(function (err) {
        if (err) {
            console.log = false,
                response.exito = false,
                response.msg = "Error al guardar el producto"
            res.json(response)
            return;
        }
        response.exito = true,
            response.msg = "El producto se guardó correctamente"
        res.json(response)
    })
}

//OBTIENE TODOS LOS PRODUCTOS
exports.find = function (req, res) {
    Producto.find(function (err, productos) {
        res.json(productos)
    })
}

//OBTIENE TODOS LOS PRODUCTOS
exports.findOne = function (req, res) {
    Producto.findOne({ _id: req.params.id }, function (err, productos) {
        res.json(productos)
    })
}

//ACTUALIZAR PRODUCTO POR ID
exports.update = function (req, res) {
    let producto = {
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        precio: req.body.precio,
        cantidad: req.body.cantidad,
        stockMinimo: req.body.stockMinimo
    }

    Producto.findByIdAndUpdate(req.params.id, { $set: producto }, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al modificar producto"
            res.json(response)
            return;
        }
        response.exito = true,
            response.msg = "Se modificaron correctamente los datos del producto"
        res.json(response)
    })
}

exports.remove = function (req, res) {
    Producto.findByIdAndRemove({ _id: req.params.id }, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al eliminar producto"
            res.json(response)
            return;
        }
        response.exito = true,
            response.msg = "Se elimino correctamente el producto"
        res.json(response)
    })
}