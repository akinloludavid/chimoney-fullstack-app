import { useMutation } from '@tanstack/react-query'
import axiosInstance from '../../api'
import { IRequestPaymentPayload, ITransferMoneyPayload } from '../../types'
import { decryptData, encryptData } from '../../utils/helpers'

export const requestPayment = async (payload: IRequestPaymentPayload) => {
    const encryptedData = {
        encryptedData: encryptData(payload),
    }
    const res = await axiosInstance.post('/initiate/payment', encryptedData)
    return decryptData(res.data?.data || res.data)
}

export const transferMoney = async (payload: ITransferMoneyPayload[]) => {
    const encryptedData = {
        encryptedData: encryptData(payload),
    }
    const res = await axiosInstance.post('/transfer/payment', encryptedData)
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
