import { useQuery } from '@tanstack/react-query'
import axiosInstance from '../../api'

export const convertLocalAmountToUSD = async (
    originCurrency: string,
    amountInOriginCurrency: number,
) => {
    const res = await axiosInstance.get(
        `/convert-amount-to-usd?originCurrency=${originCurrency}&amountInOriginCurrency=${amountInOriginCurrency}`,
    )
    return res.data?.data || res.data
}

export const convertUSDAmountToLocalAmount = async (
    destinationCurrency: string,
    amountInUSD: number,
) => {
    const res = await axiosInstance.get(
        `/convert-usd-to-amount?destinationCurrency=${destinationCurrency}&amountInUSD=${amountInUSD}`,
    )
    return res.data?.data || res.data
}
export const useGetLocalAmountToUSD = (
    originCurrency: string,
    amountInOriginCurrency: number,
) => {
    return useQuery({
        queryKey: ['/convert-amount-to-usd'],
        queryFn: () =>
            convertLocalAmountToUSD(originCurrency, amountInOriginCurrency),
    })
}

export const useGetUSDToLocalAmount = (
    destinationCurrency: string,
    amountInUSD: number,
) => {
    return useQuery({
        queryKey: ['/convert-amount-to-usd'],
        queryFn: () =>
            convertLocalAmountToUSD(destinationCurrency, amountInUSD),
    })
}
