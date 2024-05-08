// Importar la biblioteca node-cache
const NodeCache = require('node-cache');

// Crear una nueva instancia de caché
const cache = new NodeCache();

// Objeto para exportar las funciones de manejo de caché
const cacheService = {
  // Función para guardar datos en caché
  guardarEnCache: (key, data, ttl) => {
    // TTL (Time-To-Live) opcional: tiempo en segundos antes de que los datos expiren
    cache.set(key, data, ttl);
  },

  // Función para obtener datos de la caché
  obtenerDeCache: (key) => {
    return cache.get(key); // Devuelve los datos asociados con la clave
  },

  // Función para limpiar la caché
  limpiarCache: () => {
    cache.flushAll(); // Borra todos los datos de la caché
  }
};

// Exportar el objeto cacheService para que pueda ser utilizado en otros archivos
module.exports = cacheService;
