import {
    Menu,
    MenuButton,
    Button,
    MenuList,
    MenuItem,
    Icon,
} from '@chakra-ui/react'
import { IoChevronDownOutline } from 'react-icons/io5'
import { FaUserCircle } from 'react-icons/fa'

const UserProfile = () => {
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
                <Icon as={FaUserCircle} fontSize='24px' />
            </MenuButton>
            <MenuList>
                <MenuItem>Download</MenuItem>

                <MenuItem>Sign Out</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default UserProfile
