import Router from 'express'
import { getAllSubAccounts, logIn, logOut, signUp } from '../controllers/auth'
import { isAuthenticated } from '../middleware/auth'
import { validateSignup, validateUser } from '../middleware/validation'

const router = Router()

router.post('/auth/signup', validateSignup, signUp)
router.post('/auth/login', validateUser, logIn)
router.post('/auth/logout', logOut)
router.get('/subaccount/lists', isAuthenticated, getAllSubAccounts)


export default router
