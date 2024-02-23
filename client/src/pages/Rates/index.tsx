import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { useGetLocalAmountToUSD, useGetUSDToLocalAmount } from './api'

const Rates = () => {
    const { data } = useGetLocalAmountToUSD('NGN', 500000)
    const { data: usdToLocalAmount } = useGetUSDToLocalAmount('NGN', 500000)

    console.log(data)
    return (
        <Box>
            <Heading>Rates</Heading>
        </Box>
    )
}

export default Rates
