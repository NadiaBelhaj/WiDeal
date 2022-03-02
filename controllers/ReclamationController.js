const Reclamation = require('../models/Reclamation')
//const Chaise = require('../models/Chaise')

const index = (req, res, next) =>

//Seance.find().populate('chaises','num_chaise -_id')
{
    Reclamation.find().populate('users.user', 'email')
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
    let recID = req.body.recID
    Reclamation.findById(recID).populate('users.user', 'email')
        .then(response => {
            res.json(
                response.users
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
    let recID = req.params.id
    Reclamation.findById(recID).populate('users.user', 'email')
        .then(response => {
            res.json(
                response.users
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


    Reclamation.find({daterec:dateseance})
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



    let pat = new Reclamation(
        req.body

    );
    console.log(pat)
    pat.save()
        .then(response => {
            res.json({
                message: 'Reclamation Added Sucessfull!'
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
    let { nums, dates,datef,heured } = req.params
    let pat = new Reclamation({
      
    
        message:nums,
        daterec:dates,
        etat:datef,
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
                message: 'Reclamation Added Sucessfull!'
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
    let recID = req.params.recID
    let updateData = {
        message:req.body.message,
        daterec:req.body.daterec,
        etat:req.body.etat,
       
       
    users: [
        {
            user: {
                _id: req.body._id
            }
    }

]

        
    }
    Reclamation.findByIdAndUpdate(recID, { $set: updateData })
        .then(() => {
            res.json({
                message: 'reclamation  updated successfully!'
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
    let recID = req.params.recID

    Reclamation.findByIdAndRemove(recID)
        .then(() => {
            req.json({
                message: 'reclamation deleted'
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