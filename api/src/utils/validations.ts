import Joi from 'joi'



export const signUpValidation = Joi.object({
    email: Joi.string().email().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    phoneNumber: Joi.string()
        .regex(/^\+\d{2,3}\d{9,10}$/)
        .required(),
    name: Joi.string(),
    password: Joi.string().required().min(8).max(255),
})

export const userValidation = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8).max(255),
})

export const payoutValidation = Joi.array().items(
    Joi.object({
        email: Joi.string().email(),
        phone: Joi.string().min(8).max(255),
        valueInUSD: Joi.number().required(),
        redeemData: Joi.object({
            walletID: Joi.string(),
            interledgerWalletAddress: Joi.string(),
        }),
    }),
)

export const paymentInitiationValidaiton = Joi.object({
    payerEmail: Joi.string().email().required(),
    valueInUSD: Joi.number().required(),
})

export const walletTransferValidation = Joi.object({
    receiver: Joi.string().required(),
    valueInUSD: Joi.number().required(),
    subAccount: Joi.string().required(),
})

export const paymentVerificationValidation = Joi.object({
    paymentId: Joi.string().required(),
})

export const subAccountValidation = Joi.object({
    subAccount: Joi.string(),
})

