'use strict';

const packageJson = require('./package.json');
const API_ROOT = '/api';

module.exports = {
    LOG_LEVEL: process.env['LOG_LEVEL'] || 'debug',
    PORT: process.env['PORT'] || 3000,
    VERSION: process.env['API_VERSION'] || packageJson.version,
    DB_URI: 'mongodb://localhost:27017/jm-cafeto-restify',

    basePath: (path) => {
        return API_ROOT.replace(/\/$/, '') + '/' + path.replace(/^\//, '')
    }
};
