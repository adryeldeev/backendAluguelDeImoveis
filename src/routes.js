
const  { Router } = require('express')
const SessionController = require('./controllers/SessionController.js')

const auth = require('./middlewares/auth.js');

const ImobiController = require('./controllers/ImobiController.js')

const multer = require('multer')

const uploadConfig = require('./middlewares/upload.js')

const MessageController = require('./controllers/MessageController.js')
const UserController = require('./controllers/UserController.js')

const upload = multer(uploadConfig)

const router = Router();
router.get('/',(req,res)=>{
    res.json({
        status:true,
        message:"Api working!"
    })
})
router.post('/createUsers', UserController.createUser)
router.get('/listusers', auth, UserController.findAllUser)
router.post('/session', SessionController.createSeassion)
router.post('/createimobi',upload.single("thumb"), ImobiController.createImobi)
router.get('/listimobi', ImobiController.findAllImobi)
router.post('/createmessage', MessageController.createMessage)
router.get('/listimobi/:slug', ImobiController.findImobi)
router.get('/listmessage/:id', MessageController.findMessage)



module.exports={ router }