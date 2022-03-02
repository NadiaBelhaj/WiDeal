const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reclamationSchema = new Schema({

    
 
    
    
        message:String,
        daterec:String,
        etat:String,

        users: [{
            user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Utilisateur'
        }
    }]
  

    
    } ,{ timestamps: true});

    const Reclamation = mongoose.model('reclamation', reclamationSchema);
    module.exports = Reclamation