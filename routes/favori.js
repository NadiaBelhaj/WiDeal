const express = require('express')
const router  = express.Router()


const FavoriController = require('../controllers/FavorieController')

router.get('/',FavoriController.index)
router.get('/showw/:id',FavoriController.index2)
router.post('/show',FavoriController.show)
router.get('/showdate/:dateseance',FavoriController.index33)

router.post('/store',FavoriController.store)

router.post('/update',FavoriController.update)
router.post('/delete',FavoriController.destory)

router.get('/storee/:nums/:dates/:dest/:st/:heured',FavoriController.storee)







module.exports=router