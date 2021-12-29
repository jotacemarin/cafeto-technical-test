'use strict';

const restify = require('restify');
const mongoose = require('mongoose');
const restifyPlugins = require('restify-plugins');
const corsMiddleware = require('restify-cors-middleware');

const MODULE_ID = 'api:main';

const config = require('./config');
const logger = require('./utils').logger(MODULE_ID);

logger.info('Initializing server');

// Init Server
const server = restify.createServer({ log: logger });

server.use(restifyPlugins.jsonBodyParser({ mapParams: true }));
server.use(restifyPlugins.acceptParser(server.acceptable));
server.use(restifyPlugins.queryParser({ mapParams: true }));
server.use(restifyPlugins.fullResponse());

const cors = corsMiddleware({
	origins: ['http://localhost:4200']
});

server.pre(cors.preflight)
server.use(cors.actual)

server.pre(function (req, res, next) {
    req.log.debug('%s %s', req.method, req.url);
    next();
});

// Serve
server.listen(config.PORT, function () {
    // Establish connection to mongodb
	mongoose.Promise = global.Promise;
	mongoose.connect(config.DB_URI, { useNewUrlParser: true });

	const db = mongoose.connection;

	db.on('error', (err) => {
        logger.error('Error. %s', err.message);
	    process.exit(1);
	});

	db.once('open', () => {
	    require('./routes')(server);
        logger.info('Server ready. Listening on PORT %s', config.PORT);
	});
});

module.exports = server;
