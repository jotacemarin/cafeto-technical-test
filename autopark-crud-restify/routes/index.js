'use strict';

module.exports = (server) => {
    require('./ping.routes')(server),
    require('./echo.routes')(server),
    require('./park.routes')(server),
    require('./vehicle.routes')(server)
};
