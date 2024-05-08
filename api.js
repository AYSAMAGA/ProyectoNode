const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Importar las rutas relacionadas con el usuario
const authMiddleware = require('./middleware/authMiddleware'); // Importar el middleware de autenticación

// Crear una instancia de la aplicación Express
const app = express();

// Middleware para analizar el cuerpo de las solicitudes
app.use(bodyParser.json());

// Middleware de autenticación global
app.use(authMiddleware);

// Rutas de usuario
app.use('/api/users', userRoutes);

// Manejador de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Inicializar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
