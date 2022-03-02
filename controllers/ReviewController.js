const Review = require('../models/Review')

const index = (req, res, next) =>

//Seance.find().populate('chaises','num_chaise -_id')
{
    Review.find().populate('offres.offre', 'num_offer')
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
    let reviewID = req.body.reviewID
    Review.findById(reviewID).populate('offres', 'num_offer')
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
    let reviewID = req.body.reviewID
    Review.findById(reviewID).populate('offres.offre', 'num_offer')
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
    let { usernamee } = req.params


    Review.find({username:usernamee})
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



    let pat = new Review(
        req.body

    );
    console.log(pat)
    pat.save()
        .then(response => {
            res.json({
                message: 'Seance Added Sucessfull!'
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
    let { nums, dates,heured,idoffre} = req.params
    let pat = new Review({
      
        username: nums,
        nombre: dates,
        Comment: heured,

        offres: [
            {
                offre: {
					_id: idoffre
				}
        }
    
    ]

        
    })
    //datereservationmateriel=new Date().toDateString, h
    pat.save()
        .then(response => {
            res.json({
                message: 'review Added Sucessfull!'
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
    let seanceID = req.body.seanceID
    let updateData = {
        date_seance: req.body.date_seance,
        heure_debut: req.body.heure_debut,
        heure_fin: req.body.heure_fin,
        duree: req.body.duree,
        seats: [{
            num_seat: req.body.num_seat,
            available: req.body.available,
        }]
    }
    Seance.findByIdAndUpdate(seanceID, { $set: updateData })
        .then(() => {
            res.json({
                message: 'Seance updated successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'an error Occured!'
            })
        })
}


////update a Seance seat statut
const updateDispo = (req, res, next) => {
    let seanceID = req.body.seanceID
    req.body
    Seance.findByIdAndUpdate(seanceID, { $set: req.body })
        .then(() => {
            res.json({
                message: 'Seance seat statut updated successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'an error Occured!'
            })
        })
}




//update a Seance
const update2 = async (req, res, next) => {
    let seanceID = req.params.id
    let SeatID = req.params.idd

   
    let seanceFetched = await Seance.findOne({ _id: seanceID });
    const promises = seanceFetched && seanceFetched.chaises.map(async (item) => {
//        item.disponibility = (SeatID == item._id) && false;
if (SeatID == item._id){
    item.disponibility=false
}


    })
    await Promise.all(promises)
    
    console.log(seanceFetched)
    Seance.findOneAndUpdate({ _id: seanceFetched._id }, { $set: seanceFetched }).then(() => {
        res.json({
            message: 'Seance updated successfully!'
        })
    })
        .catch(error => {
            res.json({
                message: 'an error Occured!'
            })
        })
   // res.status(200).json(seanceFetched)
}

//delete an chair

const destory = (req, res, next) => {
    let seanceID = req.body.seanceID
    Seance.findByIdAndRemove(seanceID)
        .then(() => {
            req.json({
                message: 'an error Occured!'
            })
        })
        .catch(error => {
            res.json({
                message: 'an error Occured!'
            })
        })
}

module.exports = {
    index, show, store, update, destory, updateDispo, index2, update2,storee,index33

}