const Queue = require('bull');

// Configuración de la cola
const miCola = new Queue('mi-cola');

module.exports = {
    miCola
};
