import { Request, Response } from 'express'
import axiosInstance from '../config/axios'

export const getUsdAmountInLocal = async (req: Request, res: Response) => {
    const { amountInUSD, destinationCurrency } = req.query
    try {
        const response = await axiosInstance.get(
            `/info/usd-amount-in-local?destinationCurrency=${destinationCurrency}&amountInUSD=${amountInUSD}`,
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

export const getLocalAmountInUsd = async (req: Request, res: Response) => {
    const { amountInOriginCurrency, originCurrency } = req.query
    try {
        const response = await axiosInstance.get(
            `/info/local-amount-in-usd?originCurrency=${originCurrency}&amountInUSD=${amountInOriginCurrency}`,
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
