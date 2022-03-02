const Voucher = require('../models/Voucher')
const index=(req, res, next) => 
{
    Voucher.find()
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
    let voucherID=req.body.voucherID
    Voucher.findById(voucherID)
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

    let pat= new Voucher(
        req.body
       
    );
    console.log(pat)
    pat.save()
    .then(response => {
        res.json({
            message:'Voucher Added Sucessfull!'
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
    let voucherID=req.body.voucherID


    let updateData={
        partnername:req.body.partnername,
        image:req.body.image,
        description:req.body.description,
        datedebut:req.body.datedebut,
        datefin:req.body.datefin

    }
    Voucher.findByIdAndUpdate(voucherID, {$set:updateData})
    .then(()=>{
        res.json( {
            message:'Voucher updated successfully!'
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

    let { part,img,desc,datde,datfi } = req.params
   
    let updateData={
        image:img,
        description:desc,
        datedebut:datde,
        datefin:datefin
    }
   // Utilisateur.findByIdAndUpdate(id, {$set:updateData})
   Voucher.find({partnername:part}).update({$set:updateData})
    .then(()=>{
        res.json( {
            message:'Voucher updated successfully!'
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
    let voucherID=req.body.voucherID

    Voucher.findByIdAndRemove(voucherID)
    .then(()=>{
        req.json({
            message: 'Voucher Deleted!'
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