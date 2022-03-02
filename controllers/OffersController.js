const Offers = require('../models/Offers')
const index=(req, res, next) => 
{
    Offers.find()
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
    let offersID=req.body.offersID
    Offers.findById(offersID)
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


//show seance by date

const index33 =(req, res,next)=>{
    let { dateseance } = req.params


    Offers.find({datedebut:dateseance})
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


const indexservice =(req, res,next)=>{


    Offers.find({type:"Service"})
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


const indexobject =(req, res,next)=>{


    Offers.find({type:"Object"})
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

    let pat= new Offers(
        req.body
       
    );
    console.log(pat)
    pat.save()
    .then(response => {
        res.json({
            message:'Offers Added Sucessfull!'
        })
    })
.catch(eroor => {
    res.json({
        message:'an error Occured!'
    })
})
}

////////////////////////////////////////////////////////////////////////////////////////////////
//Store avec user
const storee = (req, res, next) => {
    let { p1,p2,p3,p4,p5,p6,p7,p8,p9,heured } = req.params
    let pat = new Offers({
      
       
       
    name: p1,
    description:p2,
    image: p3,
    price: p4,
    latitude: p5,
    longitude: p6,
    type:p7,
    datedebut:p8,
    datefin:p9,

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
                message: 'Offers Added Sucessfull!'
            })
        })
        .catch(error => {
            res.json({
                message: 'an error Occured!'
            })
        })
}



//update an chaise
const update =(req, res, next)=>
{
    let offersID=req.body.offersID
    let updateData={
        name:req.body.name,
        description:req.body.description,
        image:req.body.image,
        price:req.body.price,
        latitude:req.body.latitude,
        longitude:req.body.longitude,
        disponibilite:req.body.disponibilite,
        datedebut:req.body.datedebut,
        datefin:req.body.datefin
    }
    Offers.findByIdAndUpdate(offersID, {$set:updateData})
    .then(()=>{
        res.json( {
            message:'Offers updated successfully!'
        })
    })
.catch(error =>{
    res.json({
        message:'an error Occured!'
    })
})
}

//Update disponibilte
const updatedispotrue =async(req, res, next)=>
{

    let {namee } = req.params
   
    let updateData={
        disponibilite:true
    }
   // Utilisateur.findByIdAndUpdate(id, {$set:updateData})
   Offers.find({name:namee}).update({$set:updateData})
    .then(()=>{
        res.json( {
            message:'Offers updated successfully!'
        })
    })
.catch(error =>{
    res.json({
        message:'an error Occured!'
    })
})
}


//Update disponibilte
const updatedispofalse =async(req, res, next)=>
{

    let {namee } = req.params
   
    let updateData={
        disponibilite:false
    }
   // Utilisateur.findByIdAndUpdate(id, {$set:updateData})
   Offers.find({name:namee}).update({$set:updateData})
    .then(()=>{
        res.json( {
            message:'Offers updated successfully!'
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
    let offersID=req.body.offersID
    Offers.findByIdAndRemove(offersID)
    .then(()=>{
        req.json({
            message: 'offer removed successfully'
        })
    })
    .catch(error =>{
        res.json({
            message:'an error Occured!'
        })
    })
}

module.exports={
    index,show,store,update,destory,updatedispotrue,updatedispofalse,indexservice,indexobject,index33,storee

}