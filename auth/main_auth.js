// const { request } = require('express')
const jwt = require('jsonwebtoken')
const Auth = {}

Auth.verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        console.log("token "+token)
        const decoded = jwt.verify(token, "_Secret_")
        console.log(decoded)
        request.usuario = decoded
        next()
    } catch (error) {
        res.status(401)
        res.json({code:4, msg:"no tiene permisos para acceder"})
    }
}
module.exports = Auth;