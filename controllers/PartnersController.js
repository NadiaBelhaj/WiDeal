const Partner = require('../models/Partners')
const index=(req, res, next) => 
{
    Partner.find()
    .then(response => {

        res.json(
            response
        )
    })
 .catch(error=>{
     res.json({
        message:'an error Occured'
    })
 })   
}

const show= (req,res,next)=> {
    let partnerID=req.body.partnerID
    Partner.findById(partnerID)
    .then(response=> {
        res.json(
            response
        )
    })
    .catch(error=>{
        res.json({
            message:'An error Has Occured!'

        })
    })
}


const store = (req, res, next) => {

    let pat= new Partner(
        req.body
       
    );
    console.log(pat)
    pat.save()
    .then(response => {
        res.json({
            message:'Partner Added Sucessfull!'
        })
    })
.catch(eroor => {
    res.json({
        message:'an error Occured!'
    })
})
}


//update an chaise
const update =(req, res, next)=>
{
    let partnerID=req.body.partnerID


    let updateData={
        name:req.body.name,
        email:req.body.email,
        adresse:req.body.adresse,
        type:req.body.type,
    }
    Partner.findByIdAndUpdate(partnerID, {$set:updateData})
    .then(()=>{
        res.json( {
            message:'Partner updated successfully!'
        })
    })
.catch(error =>{
    res.json({
        message:'an error Occured!'
    })
})
}

//UpdateStatue
const updatecoinsnumbers =async(req, res, next)=>
{

    let { nameee,mail,adres,typ } = req.params
   
    let updateData={
        email:mail,
        adresse:adres,
        type:typ
    }
   // Utilisateur.findByIdAndUpdate(id, {$set:updateData})
   Partner.find({name:nameee}).update({$set:updateData})
    .then(()=>{
        res.json( {
            message:'Partner updated successfully!'
        })
    })
.catch(error =>{
    res.json({
        message:'an error Occured!'
    })
})
}


//delete an chair

const destory=(req,res,next) =>{
    let partnerID=req.body.partnerID

    Partner.findByIdAndRemove(partnerID)
    .then(()=>{
        req.json({
            message: 'Partner Deleted!'
        })
    })
    .catch(error =>{
        res.json({
            message:'an error Occured!'
        })
    })
}

module.exports={
    index,show,store,update,destory,updatecoinsnumbers

}