/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, Flex, Select } from '@chakra-ui/react'
import CustomInput from '../../components/CustomInput'
import ModalContainer from '../../components/ModalContainer'
import { IWalletTransferPayload } from '../../types'
import { userInfo } from '../../utils/helpers'
import { useCustomToast } from '../../utils/toast'
import { useCustomFormik, walletTransferSchema } from '../../utils/validations'
import { useGetSubAccounts, useGetTransactions } from '../Dashboard/api'
import { useTransferWallet } from './api'

const WalletTransfer = ({
    isOpen,
    onClose,
}: {
    isOpen: boolean
    onClose: () => void
}) => {
    const { successToast, errorToast } = useCustomToast()
    const { data } = useGetSubAccounts()
    const { refetch: refetchTransactions } = useGetTransactions()

    const subAccounts = data?.filter(
        (el: any) => el.id !== userInfo?.subAccount?.id,
    )
    const receiver = data?.[0]?.parent
    const { mutate, isPending: isWalletTransferLoading } = useTransferWallet()
    const onSubmit = (values: IWalletTransferPayload) => {
        mutate(values, {
            onSuccess: () => {
                successToast('Payment Transfer successful')
                resetForm()
                refetchTransactions()
            },
            onError: (err: any) => {
                errorToast(err?.response?.data?.message || 'Error occurred')
            },
        })
    }

    const initialValues = {
        subAccount: '',
        valueInUSD: '',
        receiver,
    }
    const {
        values,
        setFieldValue,
        handleChange,
        touched,
        errors,
        handleBlur,
        dirty,
        isValid,
        resetForm,
    } = useCustomFormik({
        initialValues,
        validationSchema: walletTransferSchema,
        onSubmit,
    })
    return (
        <>
            <ModalContainer
                title='Transfer to a Chimoney Account'
                isOpen={isOpen}
                onClose={onClose}
            >
                <form>
                    <Flex flexDir={'column'} gap='32px'>
                        <Select
                            name='subAccount'
                            value={values.subAccount}
                            onChange={e => {
                                setFieldValue('subAccount', e.target.value)
                            }}
                        >
                            <option value={''}>Select User</option>
                            {subAccounts?.map((account: any) => (
                                <option key={account?.id} value={account?.id}>
                                    {account?.name}
                                </option>
                            ))}
                        </Select>
                        <CustomInput
                            placeholder='Amount to transfer'
                            name='valueInUSD'
                            value={values.valueInUSD}
                            onChange={handleChange}
                            error={
                                touched.valueInUSD && errors.valueInUSD
                                    ? errors.valueInUSD
                                    : ''
                            }
                            onBlur={handleBlur}
                        />
                        <Button
                            w='full'
                            _hover={{ bgColor: 'secColor' }}
                            isDisabled={!isValid || !dirty}
                            onClick={() => onSubmit(values)}
                            isLoading={isWalletTransferLoading}
                        >
                            Make Payment
                        </Button>
                    </Flex>
                </form>
            </ModalContainer>
        </>
    )
}

export default WalletTransfer
