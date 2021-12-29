'use strict';

const config = require('../config');
const ping = require('../controllers/ping.controller');

module.exports = (server) => {
    server.get(config.basePath('/ping'), ping.version);
};
