const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const partnerSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    adresse: {
        type: String,
    },
    type: {
        type: String,
    }
    
}, { timestamps: true});

const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner