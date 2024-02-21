import { Request, Response } from 'express'
import axiosInstance from '../config/axios'

export const getAllWallets = async (req: Request, res: Response) => {
    try {
        const response = await axiosInstance.post(`/wallets/list`)
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

export const getAllWalletById = async (req: Request, res: Response) => {
    try {
        const response = await axiosInstance.post(`/wallets/lookup`, {
            walletID: req.params.id,
        })
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

export const transferBetweenWallets = async (req: Request, res: Response) => {
    const { receiver, valueInUSD } = req.body
    try {
        const response = await axiosInstance.post(`/wallets/transfer`, {
            receiver,
            valueInUSD,
        })
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
