const { request } = require('express');
const jwt = require('jsonwebtoken');
const Auth = {};

Auth.verify = (req, res, next) => {
    try {
        if (!req.headers.authorization || req.headers.authorization === null) {
            return res.json({msg:"no tiene permisos para acceder"})
        }
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, "_Secret_")
        request.usuario = decoded
        
        next()
    } catch (error) {
        res.status(401)
        res.json({code:4, msg:"no tiene permisos para acceder"})
    }
}
module.exports = Auth;