const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const requestSchema = new Schema({

    
 
    
    
        userdatas:String,
        type:String,
        destination:String,
        statue: {
            type: String,
            default:"Pending"

        },
        offres: [{
            offre:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Offers'
        }
    }]
  

    
    } ,{ timestamps: true});

    const Request = mongoose.model('Request', requestSchema);
    module.exports = Request