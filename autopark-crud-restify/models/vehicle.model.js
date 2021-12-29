'use strict';

const mongoose = require('mongoose');

const VehicleSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    mark: { type: String, required: true },
    model: { type: String, required: true },
    relase_date: { type: Number, required: true },
    licence_plate: { type: String, unique: true, required: true },
    automotive_park: { type: mongoose.Schema.ObjectId, ref: 'Park', required: true },
    created_at: { type: Date, required: true, default: Date.now },
    deleted: { type: Boolean, required: true, default: false }
});

VehicleSchema.index({ mark: 'text', model: 'text', relase_date: 'text', licence_plate: 'text', created_at: 'text', });

module.exports = mongoose.model('Vehicle', VehicleSchema);
