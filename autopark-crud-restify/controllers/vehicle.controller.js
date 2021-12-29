'use strict';

const vehicle_service = require('../services/vehicle.service');
const MODULE_ID = 'controller:park';
const utils = require('../utils');
const logger = utils.logger(MODULE_ID);

async function save (req, res, next) {
    await vehicle_service.save(req.body)
        .then(success => res.send(success))
        .catch(error => {
            res.status(500);
            res.send({ error });
        });
    return next();
};

async function get (req, res, next) {
    const { _id } = req.params;
    await vehicle_service.get(_id)
        .then(success => res.send(success))
        .catch(error => {
            res.status(500);
            res.send({ error });
        });
    return next();
}

async function update (req, res, next) {
    const { _id } = req.params;
    const json = req.body;
    await vehicle_service.update(_id, json)
        .then(success => res.send(success))
        .catch(error => {
            res.status(500);
            res.send({ error });
        });
    return next();
}

async function remove (req, res, next) {
    const { _id } = req.params;
    await vehicle_service.remove(_id)
        .then(success => res.send(success))
        .catch(error => {
            res.status(500);
            res.send({ error });
        });
    return next();
}

async function vehicles (req, res, next) {
    const { _id, page, limit, mark, model, relase_date, licence_plate, created_at, date_query } = req.params;
    const params = { mark, model, relase_date, licence_plate, created_at, date_query };
    await vehicle_service.vehicles(_id, Number(page), Number(limit), params)
        .then(success => res.send(success))
        .catch(error => {
            res.status(500);
            res.send({ error });
        });
    return next();
}

module.exports = { save, get, update, remove, vehicles };