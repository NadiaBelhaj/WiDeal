const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const utilisateurSchema = new Schema({
    name: {
        type: String,
    },
    passwordHash: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    latitude: {
        type: String,
    },
    longitude: {
        type: String,
    },
    gendre: {
        type: String,
    },
    image: {
        type: String,
    },
     nbcoins: {
        type: String,
        default:"0"

    },
    nbnft: {
        type: String,
        default:"0"

    },
    nbengagement: {
        type: String,
        default:"0"

    },
  
}, { timestamps: true});

const Utilisateur = mongoose.model('Utilisateur', utilisateurSchema);

module.exports = Utilisateur