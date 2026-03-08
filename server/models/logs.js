const Mongoose = require('mongoose');

const { Schema } = Mongoose;

// Log Schema
const LogSchema = new Schema({
    user: {
        type: String,
        default: null
    },
    model: {
        type: String,
        default: null
    },
    action: {
        type: String,
        default: null
    },
    detail: {
        type: String,
        default: null
    },
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = Mongoose.model('Logs', LogSchema);
