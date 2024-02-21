import Joi from 'joi'

export const userValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8).max(255),
})

export const payoutValidation = Joi.object({
    email: Joi.string().email(),
    phone: Joi.string().min(8).max(255),
    valueInUSD: Joi.number().required(),
    redeemData: Joi.array().items(
        Joi.object({
            walletID: Joi.string(),
            interledgerWalletAddress: Joi.string(),
        }),
    ),
})

export const paymentInitiationValidaiton = Joi.object({
    payerEmail: Joi.string().email().required(),
    valueInUSD: Joi.number().required(),
})

export const walletTransferValidation = Joi.object({
    receiver: Joi.string().required(),
    valueInUSD: Joi.number().required(),
})

export const paymentVerificationValidation = Joi.object({
    paymentId: Joi.string().required(),
})
