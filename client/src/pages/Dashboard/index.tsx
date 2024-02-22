import { Flex, Grid, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import React from 'react'
import { LazyLoader } from '../../components/WithSuspense'
import { useGetTransactions, useGetWallets } from './api'

const Dashboard = () => {
    const { isPending: isLoadingBalance, data } = useGetWallets()
    const { isPending: isLoadingTransactions, data: transactions } =
        useGetTransactions()

    const wallets = data?.data
    console.log(transactions)
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
                            border='1px solid grey'
                            borderRadius={'8px'}
                            p='16px'
                            gap='16px'
                            flexDir={'column'}
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
                <Heading variant={'h1'} mb='24px'>
                    Your Recent Transactions
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
                            border='1px solid grey'
                            borderRadius={'8px'}
                            p='16px'
                            gap='16px'
                            flexDir={'column'}
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
        </Flex>
    )
}

export default Dashboard
