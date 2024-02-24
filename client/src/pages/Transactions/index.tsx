import {
    Box,
    Heading,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react'
import { TableLoader } from '../../components/Loaders'
import { useCustomToast } from '../../utils/toast'
import { useGetTransactions } from './api'

const Transaction = () => {
    const {
        isPending: isLoadingTransactions,
        data: transactions,
        error,
    } = useGetTransactions()
    const transactionsData = transactions?.data
    const { errorToast } = useCustomToast()
    if (isLoadingTransactions) {
        return <TableLoader />
    }
    if (error) {
        return errorToast(error?.message || 'Error occurred')
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
                        {transactionsData
                            ?.sort((a: any, b: any) =>
                                a.issueDate < b.issueDate ? 1 : -1,
                            )
                            ?.map((transaction: any) => (
                                <Tr key={transaction?.id}>
                                    <Td>
                                        {new Date(
                                            transaction?.issueDate,
                                        ).toDateString()}
                                    </Td>
                                    <Td>{transaction?.type}</Td>
                                    <Td isNumeric>{transaction?.valueInUSD}</Td>
                                    <Td>
                                        {transaction?.redeemData?.walletID ||
                                            transaction?.email}
                                    </Td>
                                    <Td>
                                        {transaction?.payerEmail ||
                                            transaction?.issuer}
                                    </Td>
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
