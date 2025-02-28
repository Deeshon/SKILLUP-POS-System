import express from 'express'
import {registerCompany, getUsers, login, registerUser} from '../controllers/auth.controller'
import upload from '../middleware/uploadMiddleware'
// import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/register', upload.single('profileImageUrl'), registerUser)
// router.post('/logup', logup)
router.post('/login', login)
// router.post('/refreshToken', refreshToken)
// router.get('/users', authenticate, getUsers)

router.post('/company',upload.single('companyLogoUrl'), registerCompany)
router.get('/users', getUsers)

export default router