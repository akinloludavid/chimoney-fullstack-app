import { Box } from '@chakra-ui/react'
import { useGetTransactions } from './api'

const Transaction = () => {
    const { data } = useGetTransactions()
    console.log(data)
    return <Box></Box>
}

export default Transaction
