const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VentasSchema = new Schema({
    fecha: { type: Date, required: true, max: 120 },
    codigo_ref: { type: String, required: true, max: 30 },
    cantidad: { type: String, required: true, max: 10 },
    precio_total: { type: String, required: true, max: 15 },
    descuento: { type: String, required: false, max: 15 }
});

module.exports = mongoose.model("ventas", VentasSchema);