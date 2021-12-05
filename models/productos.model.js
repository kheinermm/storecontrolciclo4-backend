const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductosSchema = new Schema({
    codigo: { type: String, required: true, max: 30 },
    nombre: { type: String, required: true, max: 60 },
    categoria: { type: String, required: true, max: 40 },
    precio: { type: String, required: true, max: 15 },
    cantidad: { type: String, required: true, max: 10 },
    stockMinimo: { type: String, default: "1", required: false, max: 10 }
});

module.exports = mongoose.model("productos", ProductosSchema);