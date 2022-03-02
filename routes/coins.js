const express = require('express')
const router  = express.Router()

const CoinsController = require('../controllers/CoinsController')

router.get('/',CoinsController.index)
router.post('/show',CoinsController.show)
router.get('/',CoinsController.index)
router.post('/store',CoinsController.store)
router.post('/update',CoinsController.update)
// amountpris,curr
router.post('/delete',CoinsController.destory)
router.get('/updatecoinsnumbers/:curr/:amountpris',CoinsController.updatecoinsnumbers)




module.exports=router