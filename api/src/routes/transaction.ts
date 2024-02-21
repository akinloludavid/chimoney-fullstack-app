import Router from 'express'
import {
    getAllTransactions,
    getTransactionById,
} from '../controllers/transactions'
import { isAuthenticated } from '../middleware/auth'

const router = Router()

router.get('/transactions', isAuthenticated, getAllTransactions)
router.get('/transaction/:id', isAuthenticated, getTransactionById)

export default router
