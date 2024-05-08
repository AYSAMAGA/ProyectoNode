

const mongoose = require('mongoose');

// Definición del esquema de datos
const datosSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  edad: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  fechaRegistro: {
    type: Date,
    default: Date.now
  }
});

// Definición del modelo Datos utilizando el esquema datosSchema
const Datos = mongoose.model('Datos', datosSchema);

module.exports = Datos;
