import { Flex, Icon, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import { MdMenu } from 'react-icons/md'
import ColorModeToggle from '../../components/ColorModeToggle'
import SideMenu from './SideMenu'
import UserProfile from './UserProfile'

const Navbar = () => {
    const navBg = useColorModeValue('light.secBg', 'dark.secBg')
    const [showDrawer, setShowDrawer] = useState(false)
    const onClose = () => {
        setShowDrawer(false)
    }
    return (
        <Flex
            p={['24px']}
            bgColor={navBg}
            alignItems='center'
            justify={['space-between', 'space-between','flex-end']}
        >
            <Icon
                as={MdMenu}
                fontSize={'24px'}
                cursor='pointer'
                display={['flex','flex','none']}
                onClick={() => setShowDrawer(true)}
            />
            <SideMenu isOpen={showDrawer} onClose={onClose} />
            <Flex justifyContent='flex-end' align={'center'} gap='8px'>
                <ColorModeToggle />
                <UserProfile />
            </Flex>
        </Flex>
    )
}

export default Navbar
