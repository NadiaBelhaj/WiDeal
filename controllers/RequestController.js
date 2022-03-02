const Request = require('../models/Request')
//const Chaise = require('../models/Chaise')

const index = (req, res, next) =>

//Seance.find().populate('chaises','num_chaise -_id')
{
    Request.find().populate('offres.offre', 'name price datedebut')
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
    let requestID = req.body.requestID
    Request.findById(requestID).populate('offres.offre', 'name price datedebut')
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
    let requestID = req.params.id
    Request.findById(requestID).populate('offres.offre', 'name price datedebut')
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

//show seance by user

const index33 =(req, res,next)=>{
    let { dateseance } = req.params


    Request.find({userdatas:dateseance})
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



    let pat = new Request(
        req.body

    );
    console.log(pat)
    pat.save()
        .then(response => {
            res.json({
                message: 'Request Added Sucessfull!'
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
    let { nums, dates,dest,st,heured } = req.params
    let pat = new Request({
        userdatas:nums,
        type:dates,
        destination:dest,
        statue:st,
       

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
                message: 'Request Added Sucessfull!'
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
    let requestID = req.params.requestID
    let updateData = {
     

        userdatas:req.body.userdatas,
        type:req.body.type,
        destination:req.body.destination,
        statue:req.body.statue,
       
        offres: [
            {
                offre: {
					_id: req.body._id
				}
        }
    
    ]
        
    }
    Request.findByIdAndUpdate(requestID, { $set: updateData })
        .then(() => {
            res.json({
                message: 'Request  updated successfully!'
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
    let requestID = req.params.requestID

    let updateData={
        statue:"Approved"
    }
    Request.findByIdAndUpdate(requestID, { $set: updateData })

   //Offers.find({name:namee}).update({$set:updateData})
    .then(()=>{
        res.json( {
            message:'request updated successfully!'
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
    let requestID = req.params.requestID
    Request.findByIdAndRemove(requestID)
        .then(() => {
            req.json({
                message: 'Request deleted'
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