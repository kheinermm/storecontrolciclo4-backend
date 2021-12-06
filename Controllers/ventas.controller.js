const Venta = require('../models/ventas.model');

let response = {
    msg: "",
    exito: false
}

//CREA NUEVA VENTA
exports.create = function (req, res) {
    let venta = new Venta({
        fecha: req.body.fecha,
        codigo_ref: req.body.codigo_ref,
        cantidad: req.body.cantidad,
        precio_total: req.body.precio_total,
        descuento: req.body.descuento
    })
    //GUARDA VENTA
    venta.save(function (err) {
        if (err) {
            console.log = false,
                response.exito = false,
                response.msg = "Error al guardar la venta"
            res.json(response)
            return;
        }
        response.exito = true,
            response.msg = "La venta se guardó correctamente"
        res.json(response)
    })
}

//OBTIENE TODAS LAS VENTAS
exports.find = function (req, res) {
    Venta.find(function (err, ventas) {
        res.json(ventas)
    })
}

//OBTIENE TODAS LAS VENTAS
exports.findOne = function (req, res) {
    Venta.findOne({ _id: req.params.id }, function (err, ventas) {
        res.json(ventas)
    })
}

//ACTUALIZAR VENTA POR ID
exports.update = function (req, res) {
    let venta = {
        fecha: req.body.fecha,
        codigo_ref: req.body.codigo_ref,
        cantidad: req.body.cantidad,
        precio_total: req.body.precio_total,
        descuento: req.body.descuento
    }

    Venta.findByIdAndUpdate(req.params.id, { $set: venta }, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al modificar venta"
            res.json(response)
            return;
        }
        response.exito = true,
            response.msg = "Se modificaron correctamente los datos de la venta"
        res.json(response)
    })
}

exports.remove = function (req, res) {
    Venta.findByIdAndRemove({ _id: req.params.id }, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al eliminar venta"
            res.json(response)
            return;
        }
        response.exito = true,
            response.msg = "Se elimino correctamente la venta"
        res.json(response)
    })
}