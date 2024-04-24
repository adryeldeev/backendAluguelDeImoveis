
const  { Router } = require('express')
const SessionController = require('./controllers/SessionController')

const auth = require('./middlewares/auth');

const ImobiController = require('./controllers/ImobiController')

const multer = require('multer')

const uploadConfig = require('./middlewares/upload')

const MessageController = require('./controllers/MessageController')
const UserController = require('./controllers/UserController')

const upload = multer(uploadConfig)

const router = Router();

router.post('/createUsers', UserController.createUser)
router.get('/listusers', auth, UserController.findAllUser)
router.post('/session', SessionController.createSeassion)
router.post('/createimobi',upload.single("thumb"), ImobiController.createImobi)
router.get('/listimobi', ImobiController.findAllImobi)
router.post('/createmessage', MessageController.createMessage)
router.get('/listimobi/:slug', ImobiController.findImobi)
router.get('/listmessage/:id', MessageController.findMessage)



module.exports={ router }