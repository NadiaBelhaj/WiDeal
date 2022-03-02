const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reservationofferSchema = new Schema({

    
 
    
    
        userdatas:String,
        datereservation:Date,
      

        offres: [{
            offre:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Offers'
        }
    }]
  

    
    } ,{ timestamps: true});

    const ReservationOffer = mongoose.model('ReservationOffer', reservationofferSchema);
    module.exports = ReservationOffer