const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const voucherSchema = new Schema({
    partnername: {
        type: String,
    },
    image: {
        type: String,
    },
    description: {
        type: String,
    },
    datedebut: {
        type: String,
    },
    datefin: {
        type: String,
    }
    
}, { timestamps: true});

const Voucher = mongoose.model('Voucher', voucherSchema);

module.exports = Voucher