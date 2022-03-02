const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const favorieSchema = new Schema({

    
 
    
    
     
    datefav: {
        type: Date,
    },
      

        offres: [{
            offre:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Offers'
        }
    }],

    users: [{
        user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Utilisateur'
    }
}]
  

    
    } ,{ timestamps: true});

    const favorie = mongoose.model('favorie', favorieSchema);
    module.exports = favorie