/* eslint-disable @typescript-eslint/no-explicit-any */

import { Flex, Spinner } from '@chakra-ui/react'
import React, { Suspense } from 'react'

export const LazyLoader = () => {
    return (
        <Flex h='100vh' w='100%' justifyContent={'center'} alignItems='center'>
            <Spinner color='pryColor' size={'lg'} />
        </Flex>
    )
}
const WithSuspense = (Component: React.FC) => (props: any) => {
    return (
        <Suspense fallback={<LazyLoader />}>
            <Component {...props} />
        </Suspense>
    )
}

export default WithSuspense
/* eslint-disable @typescript-eslint/no-explicit-any */
