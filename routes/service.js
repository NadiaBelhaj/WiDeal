const express = require('express')
const router  = express.Router()

const ServiceController = require('../controllers/ServiceController')

router.get('/',ServiceController.index)
router.post('/show',ServiceController.show)
router.get('/',ServiceController.index)
router.post('/store',ServiceController.store)
router.post('/update',ServiceController.update)
router.post('/delete',ServiceController.destory)



module.exports=router