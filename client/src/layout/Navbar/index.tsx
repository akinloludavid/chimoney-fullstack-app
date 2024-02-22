import { Flex, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import ColorModeToggle from '../../components/ColorModeToggle'
import UserProfile from './UserProfile'

const Navbar = () => {
    const navBg = useColorModeValue('light.secBg', 'dark.secBg')

    return (
        <Flex
            p={['24px']}
            bgColor={navBg}
            justifyContent='flex-end'
            align={'center'}
            gap='8px'
        >
            <ColorModeToggle />
            <UserProfile />
        </Flex>
    )
}

export default Navbar
