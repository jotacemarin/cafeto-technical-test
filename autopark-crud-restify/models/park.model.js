'use strict';

const mongoose = require('mongoose');

const ParkSchema = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: { type: String, unique: true, required: true },
    created_at: { type: Date, required: true, default: Date.now },
    deleted: { type: Boolean, required: true, default: false }
});

ParkSchema.index({ name: 'text' });

ParkSchema.pre('save', function(next) {
    console.log('Pre -> save - begin ...', this);
    this.name = this.name.toLowerCase();
    next();
});

ParkSchema.pre('update', function(next) {
    console.log('Pre -> save - begin ...', this);
    this.name = this.name.toLowerCase();
    next();
});

module.exports = mongoose.model('Park', ParkSchema);
