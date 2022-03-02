const express = require('express')
const router  = express.Router()

const ReviewController = require('../controllers/ReviewController')

router.get('/',ReviewController.index)
router.post('/show',ReviewController.show)
//nums, dates,heured,idoffre
router.get('/new/:nums/:dates/:heured/:idoffre',ReviewController.storee)
router.post('/store',ReviewController.store)
router.post('/update',ReviewController.update)
router.post('/delete',ReviewController.destory)



module.exports=router