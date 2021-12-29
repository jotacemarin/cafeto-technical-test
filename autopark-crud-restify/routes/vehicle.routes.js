'use strict';

const config = require('../config');
const vehicleController = require('../controllers/vehicle.controller');

module.exports = (server) => {
    server.post(config.basePath('/vehicle'), vehicleController.save),
    server.get(config.basePath('/vehicle/:_id'), vehicleController.get),
    server.put(config.basePath('/vehicle/:_id'), vehicleController.update),
    server.del(config.basePath('/vehicle/:_id'), vehicleController.remove)
    server.get(config.basePath('/vehicles/:_id'), vehicleController.vehicles)
}