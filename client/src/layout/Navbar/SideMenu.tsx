import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Flex,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../components/Logo'
import { IDrawer } from '../../types'
import { isNavActive } from '../../utils/helpers'
import { navLinks } from '../Sidebar/navLinks'

const SideMenu = ({ isOpen, onClose }: IDrawer) => {
    const navigate = useNavigate()
    const sideBarBg = useColorModeValue('light.secBg', 'dark.secBg')

    return (
        <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent bgColor={sideBarBg}>
                <DrawerCloseButton />
                <Flex
                    flexDir={'column'}
                    align={'flex-start'}
                    h='100vh'
                    p={['12px']}
                    pt={['24px']}
                    w='100%'
                >
                    <Logo />
                    <Flex w='80%' flexDir={'column'} mt={[24]} gap={['32px']}>
                        {navLinks.map(link => (
                            <Button
                                w='full'
                                key={link.route}
                                variant={
                                    isNavActive(link.route)
                                        ? 'navActive'
                                        : 'navInActive'
                                }
                                onClick={() => {
                                  navigate(link.route)
                                  onClose()
                                }}
                                alignItems='center'
                                leftIcon={<Icon as={link.icon} />}
                            >
                                {link.label}
                            </Button>
                        ))}
                    </Flex>
                </Flex>
            </DrawerContent>
        </Drawer>
    )
}

export default SideMenu
