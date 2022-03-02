const express = require('express')
const router  = express.Router()


const ReclamationController = require('../controllers/ReclamationController')

router.get('/',ReclamationController.index)
router.post('/show',ReclamationController.show)
router.get('/showdate/:dateseance',ReclamationController.index33)

router.get('/showw/:id',ReclamationController.index2)
router.get('/storee/:nums/:dates/:datef/:heured',ReclamationController.storee)

//


router.post('/store',ReclamationController.store)
router.post('/update',ReclamationController.update)
router.post('/delete',ReclamationController.destory)












module.exports=router