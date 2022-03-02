const Coins = require('../models/Coins')
const index=(req, res, next) => 
{
    Coins.find()
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
    let coinsID=req.body.coinsID
    Coins.findById(coinsID)
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

    let pat= new Coins(
        req.body
       
    );
    console.log(pat)
    pat.save()
    .then(response => {
        res.json({
            message:'Coins Added Sucessfull!'
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
    let coinsID=req.body.coinsID

    let updateData={
        currency:req.body.currency,
        available_amount:req.body.available_amount,
        creditcardnum:req.body.creditcardnum,
        creditcardpass:req.body.creditcardpass,
    }
    Coins.findByIdAndUpdate(coinsID, {$set:updateData})
    .then(()=>{
        res.json( {
            message:'Coins updated successfully!'
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

    let { amountpris,curr } = req.params
   
    let updateData={
        available_amount:available_amount-amountpris
    }
   // Utilisateur.findByIdAndUpdate(id, {$set:updateData})
   Coins.find({currency:curr}).update({$set:updateData})
    .then(()=>{
        res.json( {
            message:'Coins updated successfully!'
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
    let coinsID=req.body.coinsID
    Coins.findByIdAndRemove(coinsID)
    .then(()=>{
        req.json({
            message: 'Coins Deleted!'
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