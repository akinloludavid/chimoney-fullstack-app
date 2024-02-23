import {
    Button,
    Flex,
    Grid,
    Heading,
    Table,
    TableCaption,
    TableContainer,
    Tbody,
    Td,
    Text,
    Tfoot,
    Th,
    Thead,
    Tr,
    useColorModeValue,
} from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { LazyLoader } from '../../components/WithSuspense'
import { TRANSACTIONS } from '../../routes/pathnames'
import { useGetTransactions, useGetWallets } from './api'

const Dashboard = () => {
    const navigate = useNavigate()
    const { isPending: isLoadingBalance, data } = useGetWallets()
    const { isPending: isLoadingTransactions, data: transactions } =
        useGetTransactions()

    const wallets = data?.data
    const transactionsData = transactions?.data
    const cardsBg = useColorModeValue('light.secBg', 'dark.secBg')
    if (isLoadingBalance || isLoadingTransactions) {
        return <LazyLoader />
    }
    return (
        <Flex flexDir={'column'} gap='48px'>
            <Box p={['36px']} borderRadius='8px' bgColor={cardsBg}>
                <Heading variant={'h1'} mb='24px'>
                    Your Wallets Balance
                </Heading>

                <Grid
                    templateColumns={[
                        'repeat(1,1fr)',
                        'repeat(2,1fr)',
                        'repeat(3,1fr)',
                    ]}
                    gap={['36px']}
                >
                    {wallets?.map((wallet: any) => (
                        <Flex
                            key={wallet.id}
                            // border='1px solid grey'
                            borderRadius={'8px'}
                            p='16px'
                            gap='16px'
                            flexDir={'column'}
                            shadow='lg'
                            cursor='pointer'
                        >
                            <Text textTransform={'capitalize'} fontSize='18px'>
                                {wallet.type}
                            </Text>
                            <Text fontSize={['24px']} fontWeight='600'>
                                ${wallet?.balance.toLocaleString()}
                            </Text>
                        </Flex>
                    ))}
                </Grid>
            </Box>
            <Box p={['36px']} borderRadius='8px' bgColor={cardsBg}>
                <Flex align={'center'} justify='space-between' mb='24px'>
                    <Heading variant={'h1'}>Your Recent Transactions</Heading>
                    <Button
                        onClick={() => navigate(TRANSACTIONS)}
                        variant={'secondary'}
                        w='fit-content'
                        rightIcon={<FaArrowRight />}
                    >
                        All Transactions
                    </Button>
                </Flex>

                <TableContainer>
                    <Table variant='striped' colorScheme='purple'>
                        <TableCaption>Recent Transactions</TableCaption>
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
                                ?.slice(0, 3)
                                ?.map((transaction: any) => (
                                    <Tr key={transaction?.id}>
                                        <Td>
                                            {new Date(
                                                transaction?.issueDate,
                                            ).toDateString()}
                                        </Td>
                                        <Td>{transaction?.type}</Td>
                                        <Td isNumeric>
                                            {transaction?.valueInUSD}
                                        </Td>
                                        <Td>
                                            {transaction?.redeemData?.walletID}
                                        </Td>
                                        <Td>{transaction?.payerEmail}</Td>
                                        <Td>{transaction?.status}</Td>
                                    </Tr>
                                ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>
        </Flex>
    )
}

export default Dashboard
