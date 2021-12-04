const Venta = require('../models/ventas.model');

let response = {
    msg: "",
    exito: false
}

//CREA NUEVO EMPLEADO
exports.create = function (req, res) {
    let venta = new Venta({
        fecha: req.body.fecha,
        codigo_ref: req.body.codigo_ref,
        producto: req.body.producto,
        cantidad: req.body.cantidad,
        precio_unit: req.body.precio_unit,
        precio_total: req.body.precio_total
    })
    //GUARDA EMPLEADO
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

//OBTIENE TODOS LOS EMPLEADOS
exports.find = function (req, res) {
    Venta.find(function (err, ventas) {
        res.json(ventas)
    })
}

//OBTIENE TODOS LOS EMPLEADOS
exports.findOne = function (req, res) {
    Venta.findOne({ _id: req.params.id }, function (err, ventas) {
        res.json(ventas)
    })
}

//ACTUALIZAR EMPLEADO POR ID
exports.update = function (req, res) {
    let venta = {
        fecha: req.body.fecha,
        codigo_ref: req.body.codigo_ref,
        producto: req.body.producto,
        cantidad: req.body.cantidad,
        precio_unit: req.body.precio_unit,
        precio_total: req.body.precio_total
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