const Queue = require('bull');

// Configurar la cola
const cola = new Queue('mi-cola');

// Agregar un trabajo a la cola
cola.add({ tarea: 'Mi tarea' });
