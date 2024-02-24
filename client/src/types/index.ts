import React from 'react'
import * as Yup from 'yup'
import { transferMoneySchema } from '../utils/validations'
export interface IAppRoute {
    path: string
    element: React.ReactNode
}

export interface IChildren {
    children: React.ReactNode
}

export interface ISubtask {
    subtitle: string
    done: boolean
}

export interface ISignUpPayload {
    email: string
    password: string
}

export interface ILoginPayload {
    email: string
    password: string
}

export interface IRequestPaymentPayload {
    valueInUSD: number
    payerEmail: string
}
export interface ITransferMoneyPayload {
    email: string
    valueInUSD: number
    phone: string
    redeemData: {
        walletID?: string
        interledgerWalletAddress?: string
    }
}

export interface IDrawer {
    isOpen: boolean
    onClose: () => void
}