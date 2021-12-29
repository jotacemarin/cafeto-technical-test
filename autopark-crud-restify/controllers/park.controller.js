'use strict';

const park_service = require('../services/park.service');
const MODULE_ID = 'controller:park';
const logger = require('../utils').logger(MODULE_ID);

async function save (req, res, next) {
    await park_service.save(req.body)
        .then(success => res.send(success))
        .catch(error => {
            res.status(500);
            res.send({ error });
        });
    return next();
};

async function get (req, res, next) {
    const { _id } = req.params;
    await park_service.get(_id)
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
    await park_service.update(_id, json)
        .then(success => res.send(success))
        .catch(error => {
            res.status(500);
            res.send({ error });
        });
    return next();
}

async function remove (req, res, next) {
    const { _id } = req.params;
    await park_service.remove(_id)
        .then(success => res.send(success))
        .catch(error => {
            res.status(500);
            res.send({ error });
        });
    return next();
}

async function parks (req, res, next) {
    const { page, limit } = req.params;
    await park_service.parks(Number(page), Number(limit))
        .then(success => res.send(success))
        .catch(error => {
            res.status(500);
            res.send({ error });
        });
    return next();
}

module.exports = { save, get, update, remove, parks };
