require("bcryptjs")
const Utilisateur = require('../models/Utilisateur')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");


const index=(req, res, next) => 
{
    Utilisateur.find()
    .then(reponse =>{
        res.json({
        response
         })
    })
 .catch(error=>{
     res.json({
        error
    })
 })   
}


const index2 =(req, res,next)=>{
    let { emailuser } = req.params


    Utilisateur.find({phone:emailuser})
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

const index4 =(req, res,next)=>{
    let { emailuser } = req.params


    Utilisateur.find({email:emailuser})
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
const show = (req, res, next) => {
    let utilisateurID = req.body.utilisateurID
     Utilisateur.findById(utilisateurID)
    .then(reponse => {
        res.json({
            reponse
        })
    })
    .catch(error => {
        res.json({
            message:'an error Occured'
        })
    })
}

const showw = (req, res, next) => {

    let utilisateurID = req.body.utilisateurID
    let utilisateurEMAIL = req.body.email

     Utilisateur.findById(utilisateurID).where(Utilisateur.email==utilisateurEMAIL)
    .then(reponse => {
        res.json({
            reponse
        })
    })
    .catch(error => {
        res.json({
            message:'an error Occured'
        })
    })
}


const store = (req, res, next) => {

    let pat= new Utilisateur(
        req.body
       
    );
    console.log(pat)
    pat.save()
    .then(response => {
        res.json({
            message:'User Added Sucessfull!'
        })
    })
.catch(eroor => {
    res.json({
        message:'an error Occured!'
    })
})
}


//update an utilisateur
const update =(req, res, next)=>
{
    let utilisateurID=req.body.utilisateurID
    let updateData={
        name:req.body.name,
        email:req.body.email,
        phoneNumber:req.body.phoneNumber,
        birthDate:req.body.birthDate
    }
    Utilisateur.findByIdAndUpdate(utilisateurID, {$set:updateData})
    .then(()=>{
        res.json( {
            message:'Utilisateur updated successfully!'
        })
    })
.catch(error =>{
    res.json({
        message:'an error Occured!'
    })
})
}



//update an utilisateur*******
const updatev2 =async(req, res, next)=>
{

    let { id,newpass } = req.params
    const salt = await bcrypt.genSalt();
    const passwordHas = await bcrypt.hash(newpass, salt);
   
    let updateData={
        passwordHash:passwordHas
    }
   // Utilisateur.findByIdAndUpdate(id, {$set:updateData})
   Utilisateur.find({phone:id}).update({$set:updateData})
    .then(()=>{
        res.json( {
            message:'Utilisateur updated successfully!'
        })
    })
.catch(error =>{
    res.json({
        message:'an error Occured!'
    })
})
}




//router.get('/updateall/:emaill/:namee/:phonee/:pass',UtilisateurController.updatefinal)
const updatefinal =async(req, res, next)=>
{

    let { emaill,namee,phonee,pass } = req.params
    const salt = await bcrypt.genSalt();
    const passwordHas = await bcrypt.hash(pass, salt);
   
    let updateData={
        name:namee,
        phone:phonee,
        passwordHash:passwordHas
    }
   // Utilisateur.findByIdAndUpdate(id, {$set:updateData})
   Utilisateur.find({email:emaill}).update({$set:updateData})
    .then(()=>{
        res.json( {
            message:'Utilisateur updated successfully!'
        })
    })
.catch(error =>{
    res.json({
        message:'an error Occured!'
    })
})
}
//***************************************************************************************************************************** */
//COINS
const updatenbcoins =async(req, res, next)=>
{

    let { emaill,coins } = req.params
   
    let updateData={
        nbcoins:coins
    }
   // Utilisateur.findByIdAndUpdate(id, {$set:updateData})
   Utilisateur.find({email:emaill}).update({$set:updateData})
    .then(()=>{
        res.json( {
            message:'nbCoins updated successfully!'
        })
    })
.catch(error =>{
    res.json({
        message:'an error Occured!'
    })
})
}

//NFT
const updatenft =async(req, res, next)=>
{

    let { emaill,nft } = req.params
  
   
    let updateData={
       nbnft:nft
    }
   // Utilisateur.findByIdAndUpdate(id, {$set:updateData})
   Utilisateur.find({email:emaill}).update({$set:updateData})
    .then(()=>{
        res.json( {
            message:'Nft updated successfully!'
        })
    })
.catch(error =>{
    res.json({
        message:'an error Occured!'
    })
})
}

//NB Engagement
const updateengagement =async(req, res, next)=>
{

    let { emaill,nben } = req.params
 
   
    let updateData={
        nbengagement:nben
    }
   // Utilisateur.findByIdAndUpdate(id, {$set:updateData})
   Utilisateur.find({email:emaill}).update({$set:updateData})
    .then(()=>{
        res.json( {
            message:'Nb Engagement updated successfully!'
        })
    })
.catch(error =>{
    res.json({
        message:'an error Occured!'
    })
})
}
//********************************************************************************************************************** */


//delete an utilisateur

const destory=(req,res,next) =>{
    let utilisateurID= req.body.utilisateurID
    Utilisateur.findByIdAndRemove(utilisateurID)
    .then(()=>{
        req.json({
            message: 'user deleted Successfully'
        })
    })
    .catch(error =>{
        res.json({
            message:'an error Occured!'
        })
    })
}

//router.get('/deleteuser/:iduser',UtilisateurController.destory2)
const destory2=(req,res,next) =>{

    let { iduser } = req.params
   // let utilisateurID= req.body.utilisateurID
    Utilisateur.findByIdAndRemove(iduser)
    .then(()=>{
        req.json({
            message: 'user deleted Successfully'
        })
    })
    .catch(error =>{
        res.json({
            message:'an error Occured!'
        })
    })
}

const destory3=(req,res,next) =>{

    let { emaill } = req.params
   // let utilisateurID= req.body.utilisateurID
    Utilisateur.find({email:emaill}).remove()
    .then(()=>{
        req.json({
            message: 'user deleted Successfully'
        })
    })
    .catch(error =>{
        res.json({
            message:'succeess!'
        })
    })
}

module.exports={
    index,show,store,update,destory,showw,index2,destory2,updatev2,index4,updatefinal,destory3,updatenbcoins,updatenft,updateengagement

}