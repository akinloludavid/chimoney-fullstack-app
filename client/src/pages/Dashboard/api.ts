import { useQuery } from '@tanstack/react-query'
import axiosInstance from '../../api'

export const getWallets = async () => {
    const res = await axiosInstance.get(`/wallets`)
    return res.data?.data || res.data
}
export const getTransactions = async () => {
    const res = await axiosInstance.get(`/transactions`)
    return res.data?.data || res.data
}

export const useGetWallets = () => {
    return useQuery({
        queryKey: ['/wallets'],
        queryFn: getWallets,
    })
}

export const useGetTransactions = () => {
    return useQuery({
        queryKey: ['/transactions'],
        queryFn: getTransactions,
    })
}
