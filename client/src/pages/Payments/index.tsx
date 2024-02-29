import { Icon, useColorModeValue, Link } from '@chakra-ui/react'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { FaClipboard } from 'react-icons/fa'
import CustomInput from '../../components/CustomInput'
import ModalContainer from '../../components/ModalContainer'
import { useCustomToast } from '../../utils/toast'
import { requestPaymentSchema, useCustomFormik } from '../../utils/validations'
import { useGetTransactions } from '../Dashboard/api'
import { useRequestPayment } from './api'
import MakePayment from './MakePayment'
import WalletTransfer from './WalletTransfer'

const Payments = () => {
    const { successToast, errorToast } = useCustomToast()
    const boxBg = useColorModeValue('light.secBg', 'dark.secBg')
    const [showInitiatePaymentModal, setShowInitiatePaymentModal] =
        useState(false)
    const [showWalletTransfer, setWalletTransfer] = useState(false)

    const [showTransferModal, setShowTransferModal] = useState(false)
    const [paymentLink, setPaymentLink] = useState('')
    const { mutate: initiatePaymentRequest, isPending: isRequestingPayment } =
        useRequestPayment()
    const { refetch: refetchTransactions } = useGetTransactions()
    const handleSubmit = () => {
        const payload = {
            payerEmail: values.payerEmail,
            valueInUSD: Number(values.valueInUSD),
        }
        initiatePaymentRequest(payload, {
            onSuccess: res => {
                refetchTransactions()
                setPaymentLink(res?.data?.paymentLink)
                successToast(`Payment request successful`)
                resetForm()
            },
            onError: err => {
                errorToast(err?.message)
            },
        })
    }
    const initialRequestValues = {
        payerEmail: '',
        valueInUSD: '',
    }

    const {
        values,
        handleChange,
        handleBlur,
        touched,
        errors,
        dirty,
        resetForm,
        isValid,
    } = useCustomFormik({
        initialValues: initialRequestValues,
        validationSchema: requestPaymentSchema,
        onSubmit: handleSubmit,
    })

    return (
        <Box>
            <ModalContainer
                title='Initiate Payment Request'
                isOpen={showInitiatePaymentModal}
                onClose={() => {
                    setShowInitiatePaymentModal(false)
                    setPaymentLink('')
                }}
            >
                <Flex flexDirection={'column'} gap='32px' py='24px'>
                    <CustomInput
                        name='payerEmail'
                        value={values.payerEmail}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                            touched.payerEmail && errors.payerEmail
                                ? errors.payerEmail
                                : ''
                        }
                        placeholder='Email of the payer'
                    />
                    <CustomInput
                        name='valueInUSD'
                        value={values.valueInUSD}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={
                            touched.valueInUSD && errors.valueInUSD
                                ? errors.valueInUSD
                                : ''
                        }
                        placeholder={'Amount'}
                    />
                    <Flex hidden={!paymentLink} align='center' gap='8px'>
                        <Icon
                            as={FaClipboard}
                            color='secColor'
                            cursor={'pointer'}
                            onClick={() =>
                                navigator.clipboard
                                    .writeText(paymentLink)
                                    .then(() => {
                                        successToast('Payment Link copied')
                                    })
                            }
                        />
                        <Link
                            textDecoration={'underline'}
                            href={paymentLink}
                            target='_blank'
                        >
                            Payment Link
                        </Link>
                    </Flex>
                    <Button
                        w='full'
                        isDisabled={!dirty || !isValid}
                        onClick={handleSubmit}
                        _hover={{
                            bgColor: 'secColor',
                        }}
                        isLoading={isRequestingPayment}
                    >
                        Initate Payment Request
                    </Button>
                </Flex>
            </ModalContainer>
            <MakePayment
                isOpen={showTransferModal}
                onClose={() => setShowTransferModal(false)}
            />
            <WalletTransfer
                isOpen={showWalletTransfer}
                onClose={() => setWalletTransfer(false)}
            />
            <Flex gap='36px' flexDir={['column', 'row', 'row']}>
                <Flex
                    flexDir={'column'}
                    gap='48px'
                    borderRadius='8px'
                    bg={boxBg}
                    p='24px'
                    w={['100%', '10%%', '240px']}
                >
                    <Text>
                        Request Payment From both Users or Non users of Chimoney{' '}
                    </Text>
                    <Button
                        w='full'
                        mt='auto'
                        onClick={() => setShowInitiatePaymentModal(true)}
                    >
                        Request Payment
                    </Button>
                </Flex>

                <Flex
                    flexDir={'column'}
                    gap='48px'
                    borderRadius='8px'
                    bg={boxBg}
                    p='24px'
                    w={['100%', '10%%', '240px']}
                >
                    <Text>Transfer Money To Non users of Chimoney </Text>
                    <Button
                        w='full'
                        mt='auto'
                        onClick={() => setShowTransferModal(true)}
                    >
                        Make Payment
                    </Button>
                </Flex>
                <Flex
                    flexDir={'column'}
                    gap='48px'
                    borderRadius='8px'
                    bg={boxBg}
                    p='24px'
                    w={['100%', '10%%', '240px']}
                >
                    <Text>Wallet to Wallet Transfer</Text>
                    <Button
                        w='full'
                        mt='auto'
                        onClick={() => setWalletTransfer(true)}
                    >
                        Make Payment
                    </Button>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Payments
