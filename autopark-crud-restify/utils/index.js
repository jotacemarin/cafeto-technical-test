'use strict';

const bunyan = require('bunyan');

const config = require('../config');

module.exports = {
    logger: (module_id) => {
        return bunyan.createLogger({
            name: module_id,
            level: config.LOG_LEVEL
        })
    },
    booleanIsNull: (bool) => {
        let result = false;
        if (bool === null || bool === undefined) {
            result = false;
        } else {
            result = bool;
        }
        return result;
    }
};

