import Router from 'express'
import { logIn, logOut, signUp } from '../controllers/firebase/auth'
import { validateUser } from '../middleware/validation'

const router = Router()

router.post('/auth/signup', validateUser, signUp)
router.post('/auth/login', validateUser, logIn)
router.post('/auth/logout', logOut)

export default router
