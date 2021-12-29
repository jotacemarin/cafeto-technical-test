'use strict';

const mongoose = require('mongoose');
const Park = require('../models/park.model');
const MODULE_ID = 'service:park';
const logger = require('../utils').logger(MODULE_ID);

async function save (json) {
    json['_id'] = new mongoose.Types.ObjectId();
    const park = new Park(json);
    let park_saved = null;
    await park.save()
        .then(success => {
            park_saved = success;
        })
        .catch(error => {
            throw error.message;
        });
    return park_saved;
}

async function get (_id) {
    return Park.findOne({ _id, deleted: false }).exec()
        .then(success => {
            return success;
        }).catch(error => {
            throw error.message;
        });
}

async function update (_id, json) {
    return Park.findOneAndUpdate({ _id }, json).exec()
        .then(success => {
            return { updated: success._id };
        }).catch(error => {
            throw error.message;
        });
}

async function remove (_id) {
    return Park.findOneAndDelete({ _id }).exec()
        .then(success => {
            return { removed: success._id };
        }).catch(error => {
            throw error.message;
        });
}

async function parks (page, limit) {
    const $match = { deleted: false };
    const $skip = (page - 1) * limit;
    const $limit = limit; 
    return await Park.aggregate([{ $match }, { $skip }, { $limit }], (error, result) => {
        if (error) throw error;
        if (result) return result
    });
}

module.exports = { save, get, update, remove, parks };