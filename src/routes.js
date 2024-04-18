import {Router} from 'express';

import SessionController from './controllers/SessionController';
import auth from './middlewares/auth';
import ImobiController from './controllers/ImobiController';

import multer from 'multer';
import uploadConfig from './middlewares/upload'
import MessageController from './controllers/MessageController';
import UserController from './controllers/UserController';

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



export { router }