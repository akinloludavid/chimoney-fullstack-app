import {
    Box,
    Flex,
    useColorModeValue,
} from '@chakra-ui/react'
import ColorModeToggle from '../../components/ColorModeToggle'
import Logo from '../../components/Logo'
import { IChildren } from '../../types'

const AuthContainer = ({ children }: IChildren) => {
    const formBg = useColorModeValue('light.secBg', 'dark.secBg')
    return (
        <Box>
            <Flex
                p='2'
                px={['24px', '34px']}
                justify='space-between'
                align={'center'}
            >
                <Logo />
                <ColorModeToggle />
            </Flex>
            <Flex
                bgColor={formBg}
                mx='auto'
                w={['90%', '90%', '90%', '40%']}
                gap='32px'
                py='24px'
                flexDir={'column'}
                borderRadius='4px'
                my={'60px'}
                p={['8px', '24px', '48px']}
                shadow='md'
            >
                {children}
            </Flex>
        </Box>
    )
}

export default AuthContainer
