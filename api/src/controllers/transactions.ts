import { Request, Response } from 'express'
import axiosInstance from '../config/axios'

export const getAllTransactions = async (req: Request, res: Response) => {
    try {
        const response = await axiosInstance.post(`/accounts/transactions`)
        return res.status(200).json({
            data: response.data,
            status: 'success',
        })
    } catch (error: any) {
        return res.status(500).json({
            message: error.message,
            status: 'error',
        })
    }
}

export const getTransactionById = async (req: Request, res: Response) => {
    const transactionId = req.params.id
    try {
        const response = await axiosInstance.post(
            `/accounts/transaction?id=${transactionId}`,
        )
        return res.status(200).json({
            data: response.data,
            status: 'success',
        })
    } catch (error: any) {
        return res.status(500).json({
            message: error.message,
            status: 'error',
        })
    }
}
