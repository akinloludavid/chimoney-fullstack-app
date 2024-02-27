import Router from 'express'
import {
    initialPaymentRequest,
    transferMoneyOut,
    verifyPayment,
} from '../controllers/payment'
import { isAuthenticated } from '../middleware/auth'
import {
    validatePaymentInitiation,
    validatePaymentVerification,
    validatePayout,
} from '../middleware/validation'

const router = Router()

router.post(
    '/initiate/payment',
    isAuthenticated,
    validatePaymentInitiation,
    initialPaymentRequest,
)
router.post(
    '/transfer/payment',
    isAuthenticated,
    validatePayout,
    transferMoneyOut,
)

router.post(
    '/verify/payment',
    isAuthenticated,
    validatePaymentVerification,
    verifyPayment,
)

export default router
