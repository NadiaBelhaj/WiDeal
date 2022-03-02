const express = require('express')
const router  = express.Router()

const PartnersController = require('../controllers/PartnersController')

router.get('/',PartnersController.index)
router.post('/show',PartnersController.show)
router.get('/',PartnersController.index)
router.post('/store',PartnersController.store)
router.get('/updatecoinsnumbers/:nameee/:mail/:adres/:typ',PartnersController.updatecoinsnumbers)
router.post('/update',PartnersController.update)
router.post('/delete',PartnersController.destory)



module.exports=router