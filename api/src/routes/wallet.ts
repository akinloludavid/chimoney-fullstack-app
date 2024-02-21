import Router from 'express'
import {
    getAllWalletById,
    getAllWallets,
    transferBetweenWallets,
} from '../controllers/wallet'
import { isAuthenticated } from '../middleware/auth'

const router = Router()

router.get('/wallets', isAuthenticated, getAllWallets)
router.get('/wallet/:id', isAuthenticated, getAllWalletById)
router.get('/wallets/transfer', isAuthenticated, transferBetweenWallets)

export default router
