import { useQuery } from '@tanstack/react-query'
import axiosInstance from '../../api'
import { decryptData, userInfo } from '../../utils/helpers'

const subAccountId = userInfo?.subAccount?.id || ''
export const getWallets = async () => {
    const res = await axiosInstance.get(`/wallets?id=${subAccountId}`)
    return decryptData(res.data?.data || res.data)
}
export const getTransactions = async () => {
    const res = await axiosInstance.get(`/transactions?id=${subAccountId}`)
    return decryptData(res.data?.data || res.data)
}

export const getAllSubAccounts = async () => {
    const res = await axiosInstance.get(`/subaccount/lists`)
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

export const useGetSubAccounts = () => {
    return useQuery({
        queryKey: ['/sub-account-lists'],
        queryFn: getAllSubAccounts,
    })
}