const { miCola } = require('./queues');

// Define un trabajo de usuario
function addUserJob(data) {
    miCola.add('user-job', data);
}

module.exports = {
    addUserJob
};
