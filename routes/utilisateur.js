const express = require('express')
const router  = express.Router()

const UtilisateurController = require('../controllers/UtilisateurController')

router.get('/',UtilisateurController.index)
router.post('/show',UtilisateurController.show)
router.get('/',UtilisateurController.index)
router.post('/store',UtilisateurController.store)
router.post('/update',UtilisateurController.update)
router.post('/delete',UtilisateurController.destory)
router.get('/deleteuser/:iduser',UtilisateurController.destory2)
router.post('/where',UtilisateurController.showw)

router.get('/showemail/:emailuser',UtilisateurController.index2)
router.get('/showe/:emailuser',UtilisateurController.index4)

router.get('/updatev/:id/:newpass',UtilisateurController.updatev2)
router.get('/updateall/:emaill/:namee/:phonee/:pass',UtilisateurController.updatefinal)

//PIM
router.get('/updatecoins/:emaill/:coins',UtilisateurController.updatenbcoins)
router.get('/updatenft/:emaill/:nft',UtilisateurController.updatenft)
router.get('/updateengagement/:emaill/:nben',UtilisateurController.updateengagement)




router.get('/deleteemail/:emaill',UtilisateurController.destory3)




module.exports=router