const { miCola } = require('./queues');
const Usuario = require('../models/User'); 

miCola.process(async (job) => {
    const { nombre, email, edad } = job.data; 

    // Creamos un nuevo usuario con la información proporcionada
    const nuevoUsuario = new Usuario({
        nombre,
        email,
        edad
    });

    try {
        // Guardamos el usuario en la base de datos
        const usuarioGuardado = await nuevoUsuario.save();
        console.log('Usuario guardado:', usuarioGuardado);
    } catch (error) {
        console.error('Error al guardar el usuario:', error);
        // Si hay un error, puedes decidir cómo manejarlo, como volver a encolar el trabajo para intentarlo de nuevo más tarde
        throw error;
    }
});
