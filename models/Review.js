const mongoose = require('mongoose');
const Schema = mongoose.Schema;







const ReviewSchema = new Schema({
    username:String,
    nombre: Number,
    comment: String,
    
    /* seats:[
         {}
     ]*/
    offres: [{
        offre:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Offers'
    }
}]
/*chaises: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chaise'
    }],*/


}, { timestamps: true });

const Review = mongoose.model('review', ReviewSchema);

module.exports = Review