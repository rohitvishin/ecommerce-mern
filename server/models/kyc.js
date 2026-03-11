const Mongoose = require('mongoose');

const { Schema } = Mongoose;

// KYC Schema
const KYCSchema = new Schema({
    user: {
        type: String,
        default: null
    },
    aadharNumber: {
        type: String,
        default: null
    },
    aadharPhoto: {
        type: String,
        default: null
    },
    panNumber: {
        type: String,
        default: null
    },
    panPhoto: {
        type: String,
        default: null
    },
    bankName: {
        type: String,
        default: null
    },
    accountNumber: {
        type: String,
        default: null
    },
    ifscCode: {
        type: String,
        default: null
    },
    cancelCheque: {
        type: String,
        default: null
    },
    status: {
        type: String,
        default: null
    },
    updated: Date,
    created: {
        type: Date,
        default: Date.now
    }
});

module.exports = Mongoose.model('KYC', KYCSchema);