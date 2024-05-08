const express = require('express');
const bodyParser = require('body-parser');
const { miCola } = require('./workers/queues');
const { addUserJob } = require('./workers/userJob');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Ruta para agregar un trabajo a la cola
app.post('/agregar-trabajo', (req, res) => {
    const data = req.body;
    addUserJob(data);
    res.send('Trabajo agregado a la cola');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
