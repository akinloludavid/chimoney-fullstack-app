import { Request, Response, NextFunction } from 'express'
import {
    paymentInitiationValidaiton,
    paymentVerificationValidation,
    payoutValidation,
    signUpValidation,
    subAccountValidation,
    userValidation,
    walletTransferValidation,
} from '../utils/validations'

export const validateSignup = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    signUpValidation
        .validateAsync(req.body, { abortEarly: false })
        .then(_value => {
            next()
        })
        .catch(error => {
            return res.status(400).json({
                message: error.message,
                status: 'error',
            })
        })
}
export const validateUser = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    userValidation
        .validateAsync(req.body, { abortEarly: false })
        .then(_value => {
            next()
        })
        .catch(error => {
            return res.status(400).json({
                message: error.message,
                status: 'error',
            })
        })
}

export const validatePayout = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    payoutValidation
        .validateAsync(req.body, { abortEarly: false })
        .then(_value => {
            next()
        })
        .catch(error => {
            return res.status(400).json({
                message: error.message,
                status: 'error',
            })
        })
}

export const validatePaymentInitiation = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    paymentInitiationValidaiton
        .validateAsync(req.body, { abortEarly: false })
        .then(_value => {
            next()
        })
        .catch(error => {
            return res.status(400).json({
                message: error.message,
                status: 'error',
            })
        })
}

export const validatePaymentVerification = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    paymentVerificationValidation
        .validateAsync(req.body, { abortEarly: false })
        .then(_value => {
            next()
        })
        .catch(error => {
            return res.status(400).json({
                message: error.message,
                status: 'error',
            })
        })
}

export const validateSubAccount = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    subAccountValidation
        .validateAsync(req.body, { abortEarly: false })
        .then(_value => {
            next()
        })
        .catch(error => {
            return res.status(400).json({
                message: error.message,
                status: 'error',
            })
        })
}

export const validateWalletTransfer = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    walletTransferValidation
        .validateAsync(req.body, { abortEarly: false })
        .then(_value => {
            next()
        })
        .catch(error => {
            return res.status(400).json({
                message: error.message,
                status: 'error',
            })
        })
}