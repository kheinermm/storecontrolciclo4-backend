const Empleado = require('../models/proveedores.model');

let response = {
    msg: "",
    exito: false
}

//CREA NUEVO EMPLEADO
exports.create = function (req, res) {
    let proveedor = new Empleado({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    })
    //GUARDA EMPLEADO
    proveedor.save(function (err) {
        if (err) {
            console.log = false,
                response.exito = false,
                response.msg = "Error al guardar el proveedor"
            res.json(response)
            return;
        }
        response.exito = true,
            response.msg = "El proveedor se guardó correctamente"
        res.json(response)
    })
}

//OBTIENE TODOS LOS PROVEEDORES
exports.find = function (req, res) {
    Empleado.find(function (err, proveedores) {
        res.json(proveedores)
    })
}

//OBTIENE TODOS LOS PROVEEDORES
exports.findOne = function (req, res) {
    Empleado.findOne({ _id: req.params.id }, function (err, proveedores) {
        res.json(proveedores)
    })
}

//ACTUALIZAR EMPLEADO POR ID
exports.update = function (req, res) {
    let proveedor = {
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    }

    Empleado.findByIdAndUpdate(req.params.id, { $set: proveedor }, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al modificar proveedor"
            res.json(response)
            return;
        }
        response.exito = true,
            response.msg = "Se modificaron correctamente los datos del proveedor"
        res.json(response)
    })
}

exports.remove = function (req, res) {
    Empleado.findByIdAndRemove({ _id: req.params.id }, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al eliminar proveedor"
            res.json(response)
            return;
        }
        response.exito = true,
            response.msg = "Se elimino correctamente el proveedor"
        res.json(response)
    })
}