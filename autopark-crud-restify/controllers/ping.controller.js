'use strict';

function version (req, res, next) {
    res.send({version: '0.0.1'});
    return next();
};

/**
 * Send back API version (0.0.1).
 */
module.exports = { version };
