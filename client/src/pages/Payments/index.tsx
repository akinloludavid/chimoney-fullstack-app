import { Box, Button, Flex } from '@chakra-ui/react'
import React from 'react'

const Payments = () => {
    return (
        <Box>
            <Flex>
                <Box>
                    <Button>Request Payment</Button>
                </Box>

                <Box>
                    <Button>Make Payment</Button>
                </Box>
            </Flex>
        </Box>
    )
}

export default Payments
