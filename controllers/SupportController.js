const Support = require('../models/Support')
const index=(req, res, next) => 
{
    Support.find()
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
    let supportID=req.body.supportID
    Support.findById(supportID)
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

    let pat= new Support(
        req.body
       
    );
    console.log(pat)
    pat.save()
    .then(response => {
        res.json({
            message:'Support Added Sucessfull!'
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
    let supportID=req.body.supportID


    let updateData={
        username:req.body.username,
        message:req.body.message
    }
    Support.findByIdAndUpdate(supportID, {$set:updateData})
    .then(()=>{
        res.json( {
            message:'support updated successfully!'
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

    let { user,msg } = req.params
   
    let updateData={
        message:msg
    }
   // Utilisateur.findByIdAndUpdate(id, {$set:updateData})
   Support.find({username:user}).update({$set:updateData})
    .then(()=>{
        res.json( {
            message:'Support updated successfully!'
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
    let supportID=req.body.supportID

    Support.findByIdAndRemove(supportID)
    .then(()=>{
        req.json({
            message: 'Support Deleted!'
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