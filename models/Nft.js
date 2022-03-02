const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const nftSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    price: {
        type: String,
    },
   disponibilite:{
        type: Boolean,
        default:true
    }
    
}, { timestamps: true});

const Nft = mongoose.model('Nft', nftSchema);

module.exports = Nft