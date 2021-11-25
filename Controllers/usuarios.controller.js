const Usuario = require('../models/usuarios.model')
const crypto = require('crypto')
const jwt = require('jsonwebtoken');
const { response } = require('express');

const MaxAge = 24 * 60 * 60 * 1000;

exports.login = function (req, res, next) {
    
    let hashedpass = crypto.createHash("sha512").update(req.body.pass).digest("hex");
    
    Usuario.findOne(function (err, usuario) {
        usuario = new Usuario({
            usuario: req.body.usuario,
            pass: hashedpass
        })
        
        let response = { token: null }
        if (usuario !== null) {
            response.token = jwt.sign(
                { id: usuario._id, usuario: usuario.usuario }, "_Secret_"
            )
            res.cookie("jwt", response.token, { httpOnly: true, maxAge: MaxAge});
            res.json(response);
        }else{
            res.json(usuario);
        }
    })
}

exports.register = function (req, res) {
    let hashedpass = crypto.createHash("sha512").update(req.body.pass).digest("hex");
    
    let usuario = new Usuario({
        usuario: req.body.usuario,
        pass: hashedpass,
    })
    usuario.save(function (err) {
        if (err) {
            console.log = false,
                response.exito = false,
                response.msg = "Error al crear usuario"
            res.json(response)
            return;
        }
        response.exito = true,
        response.msg = "El usuario se creo correctamente"
        res.json(response)
    })
}

exports.logout = function (req, res) {
    res.cookie("jwt", "", {maxAge: 1});
}