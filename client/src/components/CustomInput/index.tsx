import { Input, InputGroup, InputProps, Text } from '@chakra-ui/react'

interface ICustomInput extends InputProps {
    error: string
}

const CustomInput = ({ error, ...rest }: ICustomInput) => {
    return (
        <>
            <InputGroup position='relative'>
                <Input variant={error ? 'danger' : 'primary'} {...rest} />
                <Text
                    top='50%'
                    right='4%'
                    transform='translateY(-50%)'
                    position='absolute'
                    hidden={!error}
                    as='small'
                    variant={'danger'}
                    color='danger'
                >
                    {error}
                </Text>
            </InputGroup>
        </>
    )
}

export default CustomInput
