'use strict';

const config = require('../config');
const parkController = require('../controllers/park.controller');

module.exports = (server) => {
    server.get(config.basePath('/parks'), parkController.parks),
    server.post(config.basePath('/park'), parkController.save),
    server.get(config.basePath('/park/:_id'), parkController.get),
    server.put(config.basePath('/park/:_id'), parkController.update),
    server.del(config.basePath('/park/:_id'), parkController.remove)
}