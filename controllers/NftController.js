const Nft = require('../models/Nft')
const index=(req, res, next) => 
{
    Nft.find()
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
    let nftID=req.body.nftID
    Nft.findById(nftID)
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

    let pat= new Nft(
        req.body
       
    );
    console.log(pat)
    pat.save()
    .then(response => {
        res.json({
            message:'Nft Added Sucessfull!'
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
    let nftID=req.body.nftID
    let updateData={
        name:req.body.name,
        description:req.body.description,
        image:req.body.image,
        price:req.body.price,
        disponibilite:req.body.disponibilite
    }
    Chaise.findByIdAndUpdate(nftID, {$set:updateData})
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

//UpdateStatue
const updatenftstatue =async(req, res, next)=>
{

    let { namee } = req.params
   
    let updateData={
        disponibilite:false
    }
   // Utilisateur.findByIdAndUpdate(id, {$set:updateData})
   Nft.find({name:namee}).update({$set:updateData})
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


//delete an chair

const destory=(req,res,next) =>{
    let nftID=req.body.nftID
    Nft.findByIdAndRemove(nftID)
    .then(()=>{
        req.json({
            message: 'Nft Deleted!'
        })
    })
    .catch(error =>{
        res.json({
            message:'an error Occured!'
        })
    })
}

module.exports={
    index,show,store,update,destory,updatenftstatue

}