import { Button, Icon, useColorModeValue } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import Logo from '../../components/Logo'
import { navLinks } from './navLinks'
import { useNavigate } from 'react-router-dom'
import { isNavActive } from '../../utils/helpers'
const Sidebar = () => {
    const sideBarBg = useColorModeValue('light.secBg', 'dark.secBg')
    const navigate = useNavigate()
    return (
        <Flex
            flexDir={'column'}
            align={'center'}
            position={'fixed'}
            inset={0}
            h='100vh'
            w='240px'
            bgColor={sideBarBg}
            p={['12px']}
            pt={['24px']}
            display={['none', 'none', 'block']}
        >
            <Logo />
            <Flex flexDir={'column'} mt={[24]} gap={['32px']}>
                {navLinks.map(link => (
                    <Button
                        w='full'
                        key={link.route}
                        variant={
                            isNavActive(link.route)
                                ? 'navActive'
                                : 'navInActive'
                        }
                        onClick={() => navigate(link.route)}
                        alignItems='center'
                        leftIcon={<Icon as={link.icon} />}
                    >
                        {link.label}
                    </Button>
                ))}
            </Flex>
        </Flex>
    )
}

export default Sidebar
