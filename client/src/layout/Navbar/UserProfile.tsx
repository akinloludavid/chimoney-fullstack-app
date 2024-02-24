import {
    Menu,
    MenuButton,
    Button,
    MenuList,
    MenuItem,
    Icon,
    Text,
} from '@chakra-ui/react'
import { IoChevronDownOutline } from 'react-icons/io5'
import { FaUserCircle } from 'react-icons/fa'
import { useAccountLogout } from './api'
import { userInfo } from '../../utils/helpers'
import { Flex } from '@chakra-ui/react'

const UserProfile = () => {
    const { mutate: handleLogout } = useAccountLogout()
    const username = userInfo?.user?.email?.split('@')[0]
    return (
        <Menu>
            <MenuButton
                as={Button}
                variant='ghost'
                py='0px'
                alignItems={'center'}
                rightIcon={<IoChevronDownOutline />}
                px='4px'
            >
                <Flex gap='8px' align={'center'}>
                    <Icon as={FaUserCircle} fontSize='24px' />
                    <Text>{username}</Text>
                </Flex>
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => handleLogout()}>Sign Out</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default UserProfile
