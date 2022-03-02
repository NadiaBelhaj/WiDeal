const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const OffersSchema = new Schema({

    users: [{
        user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Utilisateur'
    }
}],
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
    latitude: {
        type: String,
    },
    longitude: {
        type: String,
    },
   disponibilite:{
        type: Boolean,
        default:true
    },   
    type:{
        type: String
    },
    datedebut:{
        type: String
    },
    datefin:{
        type: String
    },

    
}, { timestamps: true});

const Offers = mongoose.model('Offers', OffersSchema);

module.exports = Offers