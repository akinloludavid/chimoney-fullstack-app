/* eslint-disable @typescript-eslint/no-explicit-any */

import { IconButton, Flex, Button } from '@chakra-ui/react'
import { useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import CustomInput from '../../components/CustomInput'
import ModalContainer from '../../components/ModalContainer'
import { formatYupError } from '../../utils/helpers'
import { useCustomToast } from '../../utils/toast'
import { transferMoneySchema } from '../../utils/validations'
import { useTransferMoney } from './api'

const MakePayment = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean
    onClose: () => void
}) => {
    const { successToast, errorToast } = useCustomToast()
    const { mutate, isPending: isTransferingMoney } = useTransferMoney()
    const [customErrors, setCustomErrors] = useState<Record<string, any>>({})
    const initialTransferValues = [
        {
            email: '',
            phone: '',
            valueInUSD: '',
        },
    ]

    const [payeeLists, setPayeeLists] = useState(initialTransferValues)

    const handleRemovePayee = (idx: number) => {
        const updatedPayeeLists = payeeLists.filter(
            (_el, index) => index !== idx,
        )
        setPayeeLists(updatedPayeeLists)
    }
    const queryClient = useQueryClient()
    const handleTransferMoneySubmit = () => {
        transferMoneySchema
            .validate(payeeLists, { abortEarly: false })
            .then((res: any) => {
                const payload = res.map((el: any) => ({
                    ...el,
                    valueInUSD: Number(el.valueInUSD),
                }))
                mutate(payload, {
                    onSuccess: () => {
                        onClose()
                        successToast('Transfer successful')
                        setPayeeLists(initialTransferValues)
                        queryClient.invalidateQueries({
                            queryKey: ['/transactions'],
                        })
                    },
                    onError: () => {
                        errorToast('Transfer failed')
                    },
                })
                setCustomErrors({})
            })
            .catch(err => {
                const errLists = formatYupError(err)
                setCustomErrors(errLists)
            })
    }
    return (
        <ModalContainer
            title='Payment Transfer'
            isOpen={isOpen}
            onClose={onClose}
        >
            <IconButton
                variant={'secondary'}
                width='fit-content'
                icon={<FaPlus />}
                aria-label='add'
                onClick={() =>
                    setPayeeLists((prev: any) => [
                        ...prev,
                        { email: '', phone: '', valueInUSD: '' },
                    ])
                }
            />

            {payeeLists.map((payee, idx) => (
                <Flex key={idx} flexDirection={'column'} gap='18px' py='24px'>
                    <CustomInput
                        name={`email`}
                        value={payee.email}
                        onChange={e => {
                            const updatedLists = payeeLists.map((el, index) =>
                                idx === index
                                    ? { ...el, email: e.target.value }
                                    : el,
                            )
                            setPayeeLists(updatedLists)
                        }}
                        error={customErrors[`[${idx}].email`]}
                        placeholder='Email of the payee'
                    />
                    <CustomInput
                        name={`phone`}
                        value={payee.phone}
                        onChange={e => {
                            const updatedLists = payeeLists.map((el, index) =>
                                idx === index
                                    ? { ...el, phone: e.target.value }
                                    : el,
                            )
                            setPayeeLists(updatedLists)
                        }}
                        error={customErrors[`[${idx}].phone`]}
                        placeholder={'Phone e.g +234...'}
                    />
                    <CustomInput
                        name={`valueInUSD`}
                        value={payee.valueInUSD}
                        onChange={e => {
                            const updatedLists = payeeLists.map((el, index) =>
                                idx === index
                                    ? {
                                          ...el,
                                          valueInUSD: e.target.value,
                                      }
                                    : el,
                            )
                            setPayeeLists(updatedLists)
                        }}
                        error={customErrors[`[${idx}].valueInUSD`]}
                        placeholder={'Amount in USD'}
                    />
                    <IconButton
                        hidden={payeeLists.length === 1}
                        variant={'danger'}
                        width='fit-content'
                        icon={<FaMinus />}
                        aria-label='add'
                        onClick={() => handleRemovePayee(idx)}
                    />
                </Flex>
            ))}
            <Button
                w='full'
                onClick={handleTransferMoneySubmit}
                _hover={{
                    bgColor: 'secColor',
                }}
                isLoading={isTransferingMoney}
            >
                Transfer Money
            </Button>
        </ModalContainer>
    )
}

export default MakePayment

/* eslint-disable @typescript-eslint/no-explicit-any */
