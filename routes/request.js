const express = require('express')
const router  = express.Router()


const RequestController = require('../controllers/RequestController')

router.get('/',RequestController.index)
router.get('/showw/:id',RequestController.index2)
router.post('/show',RequestController.show)
router.get('/showdate/:dateseance',RequestController.index33)

router.post('/store',RequestController.store)

router.post('/update',RequestController.update)
router.post('/delete',RequestController.destory)
router.post('/updateseat',RequestController.updateDispo)
//router.get('/updatee/:id/:idd',RequestController.update2)
router.get('/storee/:nums/:dates/:dest/:st/:heured',RequestController.storee)







module.exports=router