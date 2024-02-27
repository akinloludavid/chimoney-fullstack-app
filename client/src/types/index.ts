// eslint-disable-next-line @typescript-eslint/no-explicit-any

import React from 'react'
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
    phoneNumber: string
    firstName: string
    lastName: string
    name?: string
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

export interface IWalletTransferPayload {
    valueInUSD: string
    receiver: string
    subAccount: string
}