import { useQuery } from '@tanstack/react-query'
import axiosInstance from '../../api'

export const getTransactions = async () => {
    const res = await axiosInstance.get(`/transactions`)
    return res.data?.data || res.data
}

export const useGetTransactions = () => {
    return useQuery({
        queryKey: ['/transactions'],
        queryFn: getTransactions,
    })
}
