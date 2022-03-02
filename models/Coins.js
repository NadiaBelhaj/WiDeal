const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const coinsSchema = new Schema({
    currency: {
        type: String,
    },
    available_amount: {
        type: String,
    },
    creditcardnum: {
        type: String,
    },
    creditcardpass: {
        type: String,
    }
    
    
}, { timestamps: true});

const Coins = mongoose.model('Coins', coinsSchema);

module.exports = Coins