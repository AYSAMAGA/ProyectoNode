const express = require('express');
const NodeCache = require('node-cache');

const app = express();
const cache = new NodeCache();

app.get('/datos', (req, res) => {
    const cacheKey = 'datos'; // Clave para identificar los datos en caché
    
    // Intentar obtener los datos de la caché
    const cachedData = cache.get(cacheKey);
  
    if (cachedData) {
      // Si los datos están en caché, responder con los datos almacenados en caché
      return res.json({ origen: 'caché', datos: cachedData });
    } else {
      // Si los datos no están en caché, realizar una operación costosa (por ejemplo, una consulta a la base de datos)
      const newData = fetchDataFromDatabase(); // Función ficticia para obtener datos de la base de datos
  
      // Almacenar los nuevos datos en caché para futuras solicitudes
      cache.set(cacheKey, newData, 60); // Expira en 60 segundos
  
      // Responder con los nuevos datos obtenidos de la base de datos
      return res.json({ origen: 'base de datos', datos: newData });
    }
  });
  
