const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const supportSchema = new Schema({
    username: {
        type: String,
    },
    message: {
        type: String,
    }
    
}, { timestamps: true});

const Support = mongoose.model('Support', supportSchema);

module.exports = Support