const FavorieOffer = require('../models/Favori')
//const Chaise = require('../models/Chaise')

const index = (req, res, next) =>

//Seance.find().populate('chaises','num_chaise -_id')
{
    FavorieOffer.find().populate('offres.offre users.user', 'name price datedebut email')
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
    let favoriID = req.body.favoriID
    FavorieOffer.findById(favoriID).populate('offres.offre users.user', 'name price datedebut email')
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
    let favoriID = req.params.id
    FavorieOffer.findById(favoriID).populate('offres.offre users.user', 'name price datedebut email')
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


    FavorieOffer.find({datefav:dateseance})
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



    let pat = new FavorieOffer(
        req.body

    );
    console.log(pat)
    pat.save()
        .then(response => {
            res.json({
                message: 'FavorieOffer Added Sucessfull!'
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
    let pat = new FavorieOffer({
      
        datefav: nums,
       
       

        offres: [
            {
                offre: {
					_id: dates
				}
        }
    
    ],

    users: [
        {
            user: {
                _id: heured
            }
    }

]
    

        
    })
    //datereservationmateriel=new Date().toDateString, h
    pat.save()
        .then(response => {
            res.json({
                message: 'FavorieOffer Added Sucessfull!'
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
    let favoriID = req.params.favoriID
    let updateData = {
        datefav: req.body.datefav,
       
        offres: [
            {
                offre: {
					_id: req.body._id
				}
        }
    
    ],
    users: [
        {
            user: {
                _id: req.body._id
            }
    }

]

        
    }
    FavorieOffer.findByIdAndUpdate(favoriID, { $set: updateData })
        .then(() => {
            res.json({
                message: 'favorie  updated successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'an error Occured!'
            })
        })
}



   



//delete an chair

const destory = (req, res, next) => {
    let favoriID = req.params.favoriID

    FavorieOffer.findByIdAndRemove(favoriID)
        .then(() => {
            req.json({
                message: 'Favorie deleted'
            })
        })
        .catch(error => {
            res.json({
                message: 'an error Occured!'
            })
        })
}

module.exports = {
    index, show, store, update, destory, index2,storee,index33

}