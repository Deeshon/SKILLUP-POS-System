import express from 'express'
import {register, login, logup, getUsers, refreshToken} from '../controllers/auth.controller.js'
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', register)
router.post('/logup', logup)
router.post('/login', login)
router.post('/refreshToken', refreshToken)
router.get('/users', authenticate, getUsers)

export default router