'use strict';

const mongoose = require('mongoose');
const Vehicle = require('../models/vehicle.model');
const MODULE_ID = 'service:vehicle';
const logger = require('../utils').logger(MODULE_ID);

async function save (json) {
    json['_id'] = new mongoose.Types.ObjectId();
    const vehicle = new Vehicle(json);
    let vehicle_saved = null;
    await vehicle.save()
        .then(success => {
            vehicle_saved = success;
        }).catch(error => {
            throw error.message;
        });
    return vehicle_saved;
}

async function get (_id) {
    return Vehicle.findOne({ _id, deleted: false }).exec()
        .then(success => {
            return success;
        }).catch(error => {
            throw error.message;
        });
}

async function update (_id, json) {
    return Vehicle.findOneAndUpdate({ _id, deleted: false }, json).exec()
        .then(success => {
            return { updated: success._id };
        }).catch(error => {
            throw error.message;
        });
}

async function remove (_id) {
    return Vehicle.findOneAndDelete({ _id , deleted: false }).exec()
        .then(success => {
            return { removed: success._id };
        }).catch(error => {
            throw error.message;
        });
}

async function vehicles (_id, page, limit, params) {
    const $skip = (page - 1) * limit;
    const $limit = limit; 
    let $match = { automotive_park : mongoose.Types.ObjectId(_id), deleted: false };
    const { mark, model, relase_date, licence_plate, created_at, date_query } = params;
    if (mark) $match['mark'] = { $regex: mark, $options: 'g' };
    if (model) $match['model'] = { $regex: model, $options: 'g' };
    if (relase_date) $match['relase_date'] = { $regex: relase_date, $options: 'g' };
    if (licence_plate) $match['licence_plate'] = { $regex: licence_plate, $options: 'g' };
    const items = await Vehicle.aggregate([{ $match }, { $skip }, { $limit }], (error, result) => {
        if (error) throw error;
        if (result) return result
    })
    .then(result => result)
    .catch(error => error);
    const total = await Vehicle.aggregate([{ $match }, { $count: "total" }], (error, result) => {
        if (error) throw error;
        if (result) return result
    })
    .then(result => result)
    .catch(error => error);
    return { items, total: total[0].total };
}

module.exports = { save, get, update, remove, vehicles };

