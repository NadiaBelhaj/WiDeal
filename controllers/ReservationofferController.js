const ReservationOffer = require('../models/ReservationOffer')
//const Chaise = require('../models/Chaise')

const index = (req, res, next) =>

//Seance.find().populate('chaises','num_chaise -_id')
{
    ReservationOffer.find().populate('offres.offre', 'name price datedebut')
        .then(response => {

            res.json(
                response
            )
        })
        .catch(error => {
            res.json({
                message: 'an error Occured'
            })
        })
}

const show = (req, res, next) => {
    let reservationOfferID = req.body.reservationOfferID
    ReservationOffer.findById(reservationOfferID).populate('offres.offre', 'name price datedebut')
        .then(response => {
            res.json(
                response.offres
            )
        })
        .catch(error => {
            res.json({
                message: 'an error Occured'
            })
        })
}










const index2 = (req, res, next) =>

//Seance.find().populate('chaises','num_chaise -_id')
{
    console.log(req.params.id)
    let reservationOfferID = req.params.id
    ReservationOffer.findById(reservationOfferID).populate('offres.offre', 'name price datedebut')
        .then(response => {
            res.json(
                response.offres
            )
        })
        .catch(error => {
            res.json({
                message: 'an error Occured'
            })
        })
}

//show seance by date

const index33 =(req, res,next)=>{
    let { dateseance } = req.params


    ReservationOffer.find({datereservation:dateseance})
    .then(response =>{
        res.json(
        response
         )
    })
 .catch(error=>{
     res.json({
        error
    })
 }) 

   
 
 

       
}




const store = (req, res, next) => {



    let pat = new ReservationOffer(
        req.body

    );
    console.log(pat)
    pat.save()
        .then(response => {
            res.json({
                message: 'ReservationOffer Added Sucessfull!'
            })
        })
        .catch(eroor => {
            res.json({
                message: 'an error Occured!'
            })
        })
}





//Store with get

//router.get('/storee/:nums/:dates/:heured/:heuref/:durees',SeanceController.storee)

const storee = (req, res, next) => {
    let { nums, dates,heured } = req.params
    let pat = new ReservationOffer({
      
        userdatas: nums,
        datereservation: dates,
       

        offres: [
            {
                offre: {
					_id: heured
				}
        }
    
    ]

        
    })
    //datereservationmateriel=new Date().toDateString, h
    pat.save()
        .then(response => {
            res.json({
                message: 'ReservationOffer Added Sucessfull!'
            })
        })
        .catch(error => {
            res.json({
                message: 'an error Occured!'
            })
        })
}


//update a Seance
const update = (req, res, next) => {
    let reservationOfferID = req.params.reservationOfferID
    let updateData = {
        userdatas: req.body.userdatas,
        datereservation: req.body.datereservation,
       
        offres: [
            {
                offre: {
					_id: req.body._id
				}
        }
    
    ]
        
    }
    ReservationOffer.findByIdAndUpdate(reservationOfferID, { $set: updateData })
        .then(() => {
            res.json({
                message: 'reservationOffer  updated successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'an error Occured!'
            })
        })
}



   
    //Update disponibilte
const updateDispo =async(req, res, next)=>
{
    let reservationOfferID = req.params.reservationOfferID

    
   
    let updateData={
        disponibilite:true
    }
   ReservationOffer.findByIdAndUpdate(reservationOfferID, { $set: updateData })

   //Offers.find({name:namee}).update({$set:updateData})
    .then(()=>{
        res.json( {
            message:'ReservationOffer updated successfully!'
        })
    })
.catch(error =>{
    res.json({
        message:'an error Occured!'
    })
})
}




//delete an chair

const destory = (req, res, next) => {
    let reservationOfferID = req.params.reservationOfferID
    ReservationOffer.findByIdAndRemove(reservationOfferID)
        .then(() => {
            req.json({
                message: 'ReservationOffer deleted'
            })
        })
        .catch(error => {
            res.json({
                message: 'an error Occured!'
            })
        })
}

module.exports = {
    index, show, store, update, destory, updateDispo, index2,storee,index33

}