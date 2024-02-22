import Router from 'express'
import { getLocalAmountInUsd, getUsdAmountInLocal } from '../controllers/rates'

import { isAuthenticated } from '../middleware/auth'

const router = Router()

router.get('/convert-amout-to-usd', isAuthenticated, getLocalAmountInUsd)
router.get('/convert-usd-to-amount', isAuthenticated, getUsdAmountInLocal)

export default router
