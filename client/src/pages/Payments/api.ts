import { useMutation } from '@tanstack/react-query'
import axiosInstance from '../../api'
import { IRequestPaymentPayload, ITransferMoneyPayload } from '../../types'

export const requestPayment = async (payload: IRequestPaymentPayload) => {
    const res = await axiosInstance.post('/initiate/payment', payload)
    return res.data?.data || res.data
}

export const transferMoney = async (payload: ITransferMoneyPayload) => {
    const res = await axiosInstance.post('/transfer/payment', {
        chimoneys: payload,
    })
    return res.data?.data || res.data
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
        mutationFn: (body: ITransferMoneyPayload) => transferMoney(body),
    })
}
