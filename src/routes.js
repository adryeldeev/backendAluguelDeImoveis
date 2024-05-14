
const  { Router } = require('express')
const SessionController = require('./controllers/SessionController.js')
const ImobiController = require('./controllers/ImobiController.js')



const auth = require('./middlewares/auth.js');
const multer = require('multer')
const uploadConfig = require('./middlewares/upload.js')


const MessageController = require('./controllers/MessageController.js')
const UserController = require('./controllers/UserController.js')

const upload = multer(uploadConfig)

const router = Router();
router.post('/createusers', UserController.createUser)
router.get('/listusers', auth, UserController.findAllUser)
router.get('/listusers/:userId', UserController.findUser)
router.post('/session', SessionController.createSeassion)
router.post('/createimobi',upload.single("thumb"), ImobiController.createImobi)
router.get('/listimobi', ImobiController.findAllImobi)
router.get('/listimobi/:slug', ImobiController.findImobi)
router.post('/createmessage', MessageController.createMessage)
router.get('/listmessage/:id', MessageController.findMessage)



module.exports={ router }