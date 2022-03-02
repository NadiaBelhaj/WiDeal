const express = require('express')
const router  = express.Router()


const OfferController = require('../controllers/OffersController')

router.get('/',OfferController.index)
router.post('/show',OfferController.show)
router.get('/showdate/:dateseance',OfferController.index33)
//
router.get('/showservice',OfferController.indexservice)
router.get('/showobject',OfferController.indexobject)

router.post('/store',OfferController.store)
router.get('/storee/:p1/:p2/:p3/:p4/:p5/:p6/:p7/:p8/:p9/:heured',OfferController.storee)

router.post('/update',OfferController.update)
router.post('/delete',OfferController.destory)

router.get('/updatedispotrue/:namee',OfferController.updatedispotrue)
router.get('/updatedispofalse/:namee',OfferController.updatedispofalse)










module.exports=router