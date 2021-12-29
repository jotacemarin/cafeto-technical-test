'use strict';

const config = require('../config');
const echoController = require('../controllers/echo.controller');

module.exports = (server) => {
    server.get(config.basePath('/echo/:echo'), echoController.echo);
}