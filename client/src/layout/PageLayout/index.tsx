import { Box } from '@chakra-ui/react'
import { IChildren } from '../../types'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

export const PublicPageLayout = ({ children }: IChildren) => {
    return <Box>{children}</Box>
}

export const PrivatePageLayout = ({ children }: IChildren) => {
    return (
        <>
            <Sidebar />
            <Box pl={['0px', '0px', '240px']}>
                <Navbar />
                <Box p={['12px', '24px', '36px']}>{children}</Box>
            </Box>
        </>
    )
}
