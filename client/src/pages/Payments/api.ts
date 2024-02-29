import { useMutation } from '@tanstack/react-query'
import axiosInstance from '../../api'
import {
    IRequestPaymentPayload,
    ITransferMoneyPayload,
    IWalletTransferPayload,
} from '../../types'
import { decryptData, encryptData, userInfo } from '../../utils/helpers'

const subAccountId = userInfo?.subAccount?.data?.id || ''

export const requestPayment = async (payload: IRequestPaymentPayload) => {
    const encryptedData = {
        encryptedData: encryptData(payload),
    }
    const res = await axiosInstance.post(
        `/initiate/payment?id=${subAccountId}`,
        encryptedData,
    )
    return decryptData(res.data?.data || res.data)
}

export const transferMoney = async (payload: ITransferMoneyPayload[]) => {
    const encryptedData = {
        encryptedData: encryptData(payload),
    }
    const res = await axiosInstance.post(
        `/transfer/payment?id=${subAccountId}`,
        encryptedData,
    )
    return decryptData(res.data?.data || res.data)
}

export const walletTransfer = async (payload: IWalletTransferPayload) => {
    const encryptedData = {
        encryptedData: encryptData(payload),
    }
    const res = await axiosInstance.post(`/wallets/transfer`, encryptedData)
    return decryptData(res.data?.data || res.data)
}

export const useRequestPayment = () => {
    return useMutation({
        mutationKey: ['/initiate/payment'],
        mutationFn: (body: IRequestPaymentPayload) => requestPayment(body),
    })
}

export const useTransferMoney = () => {
    return useMutation({
        mutationKey: ['/transfer/payment'],
        mutationFn: (body: ITransferMoneyPayload[]) => transferMoney(body),
    })
}

export const useTransferWallet = () => {
    return useMutation({
        mutationKey: ['/wallets/transfer'],
        mutationFn: (body: IWalletTransferPayload) => walletTransfer(body),
    })
}