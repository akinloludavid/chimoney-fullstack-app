import { Request, Response } from 'express'
import axiosInstance from '../config/axios'
import { encryptData } from '../utils/encryptions'

export const initialPaymentRequest = async (req: Request, res: Response) => {
    const { payerEmail, valueInUSD } = req.body
    try {
        const response = await axiosInstance.post(`/payment/initiate`, {
            payerEmail,
            valueInUSD,
        })
        return res.status(200).json({
            data: encryptData(response.data),
            status: 'success',
        })
    } catch (error: any) {
        return res.status(500).json({
            message: error.message,
            status: 'error',
        })
    }
}

export const verifyPayment = async (req: Request, res: Response) => {
    const { paymentId } = req.body
    try {
        const response = await axiosInstance.post(`/payment/verify`, {
            id: paymentId,
        })
        return res.status(200).json({
            data: encryptData(response.data),
            status: 'success',
        })
    } catch (error: any) {
        return res.status(500).json({
            message: error.message,
            status: 'error',
        })
    }
}

export const transferMoneyOut = async (req: Request, res: Response) => {
    try {
        const response = await axiosInstance.post(`/payouts/chimoney`, {
            chimoneys: req.body,
        })
        return res.status(200).json({
            data: encryptData(response.data),
            status: 'success',
        })
    } catch (error: any) {
        return res.status(500).json({
            message: error.message,
            status: 'error',
        })
    }
}
