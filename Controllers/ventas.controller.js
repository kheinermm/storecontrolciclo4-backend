const Empleado = require('../models/empleados.model');

let response = {
    msg: "",
    exito: false
}

//CREA NUEVO EMPLEADO
exports.create = function (req, res) {
    let empleado = new Empleado({
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    })
    //GUARDA EMPLEADO
    empleado.save(function (err) {
        if (err) {
            console.log = false,
                response.exito = false,
                response.msg = "Error al guardar el empleado"
            res.json(response)
            return;
        }
        response.exito = true,
            response.msg = "El empleado se guardó correctamente"
        res.json(response)
    })
}

//OBTIENE TODOS LOS EMPLEADOS
exports.find = function (req, res) {
    Empleado.find(function (err, empleados) {
        res.json(empleados)
    })
}

//OBTIENE TODOS LOS EMPLEADOS
exports.findOne = function (req, res) {
    Empleado.findOne({ _id: req.params.id }, function (err, empleados) {
        res.json(empleados)
    })
}

//ACTUALIZAR EMPLEADO POR ID
exports.update = function (req, res) {
    let empleado = {
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    }

    Empleado.findByIdAndUpdate(req.params.id, { $set: empleado }, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al modificar empleado"
            res.json(response)
            return;
        }
        response.exito = true,
            response.msg = "Se modificaron correctamente los datos del empleado"
        res.json(response)
    })
}

exports.remove = function (req, res) {
    Empleado.findByIdAndRemove({ _id: req.params.id }, function (err) {
        if (err) {
            console.error(err),
                response.exito = false,
                response.msg = "Error al eliminar empleado"
            res.json(response)
            return;
        }
        response.exito = true,
            response.msg = "Se elimino correctamente el empleado"
        res.json(response)
    })
}