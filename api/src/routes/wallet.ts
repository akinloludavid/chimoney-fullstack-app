import Router from 'express'
import {
    getAllWalletById,
    getAllWallets,
    transferBetweenWallets,
} from '../controllers/wallet'
import { isAuthenticated } from '../middleware/auth'
import { validateWalletTransfer } from '../middleware/validation'

const router = Router()

router.get('/wallets', isAuthenticated, getAllWallets)
router.get('/wallet/:id', isAuthenticated, getAllWalletById)
router.post(
    '/wallets/transfer',
    isAuthenticated,
    validateWalletTransfer,
    transferBetweenWallets,
)

export default router
