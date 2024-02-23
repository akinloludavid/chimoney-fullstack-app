import {
    Box,
    Heading,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react'
import { LazyLoader } from '../../components/WithSuspense'
import { useGetTransactions } from './api'

const Transaction = () => {
    const { isPending: isLoadingTransactions, data: transactions } =
        useGetTransactions()
    const transactionsData = transactions?.data
    if (isLoadingTransactions) {
        return <LazyLoader />
    }
    return (
        <Box>
            <Heading mb='24px' variant={'h1'}>
                All Transactions
            </Heading>
            <TableContainer>
                <Table variant='striped' colorScheme='purple'>
                    <Thead>
                        <Tr>
                            <Th>Transaction Date</Th>
                            <Th>Type</Th>
                            <Th isNumeric>Amount (USD)</Th>
                            <Th>Recipient</Th>
                            <Th>Sender</Th>
                            <Th>Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {transactionsData?.map((transaction: any) => (
                            <Tr key={transaction?.id}>
                                <Td>
                                    {new Date(
                                        transaction?.issueDate,
                                    ).toDateString()}
                                </Td>
                                <Td>{transaction?.type}</Td>
                                <Td isNumeric>{transaction?.valueInUSD}</Td>
                                <Td>{transaction?.redeemData?.walletID}</Td>
                                <Td>{transaction?.payerEmail}</Td>
                                <Td>{transaction?.status}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default Transaction
