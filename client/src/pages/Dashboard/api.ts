import { useQuery } from '@tanstack/react-query'
import axiosInstance from '../../api'
import { decryptData } from '../../utils/helpers'

export const getWallets = async () => {
    const res = await axiosInstance.get(`/wallets`)
    return decryptData(res.data?.data || res.data)
}
export const getTransactions = async () => {
    const res = await axiosInstance.get(`/transactions`)
    return decryptData(res.data?.data || res.data)
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
