const express = require('express')
const router  = express.Router()

const NftController = require('../controllers/NftController')

router.get('/',NftController.index)
router.post('/show',NftController.show)
router.get('/',NftController.index)
router.post('/store',NftController.store)
router.post('/update',NftController.update)
router.post('/delete',NftController.destory)
router.get('/updatenftstat/:namee',NftController.updatenftstatue)




module.exports=router