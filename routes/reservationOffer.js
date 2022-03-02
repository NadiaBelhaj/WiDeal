const express = require('express')
const router  = express.Router()


const resoffreController = require('../controllers/ReservationofferController')

router.get('/',resoffreController.index)
router.get('/showw/:id',resoffreController.index2)
router.post('/show',resoffreController.show)
router.get('/showdate/:dateseance',resoffreController.index33)

router.post('/store',resoffreController.store)

router.post('/update',resoffreController.update)
router.post('/delete',resoffreController.destory)

router.get('/storee/:nums/:dates/:heured',resoffreController.storee)







module.exports=router