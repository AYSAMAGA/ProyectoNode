// datosRoutes.js
const express = require('express');
const router = express.Router();
const datosController = require('../controllers/datosController');

// Definición de rutas
router.get('/', datosController.obtenerDatos);
router.post('/', datosController.crearDatos);
router.put('/:id', datosController.actualizarDatos);
router.delete('/:id', datosController.eliminarDatos);

module.exports = router;
