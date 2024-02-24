import { FormikHelpers, FormikProps, useFormik } from 'formik'
import * as Yup from 'yup'

interface ICustomFormik<T> {
    initialValues: T
    validationSchema: Record<string, any>
    onSubmit: (values: T, formikHelpers?: FormikHelpers<T>) => void
}
export const useCustomFormik = <T>({
    initialValues,
    validationSchema,
    onSubmit,
    ...options
}: ICustomFormik<T>) => {
    return useFormik({
        initialValues,
        validationSchema,
        validateOnBlur: true,

        enableReinitialize: true,
        onSubmit,
        validateOnMount: true,
        ...options,
    })
}
export const signUpSchema = Yup.object({
    email: Yup.string()
        .required('Please provide your email')
        .email('Invalid email'),
    password: Yup.string().required('Please provide your password'),
})

export const loginSchema = Yup.object({
    email: Yup.string()
        .required('Please provide your email')
        .email('Invalid email'),
    password: Yup.string().required('Please provide your password'),
})

export const requestPaymentSchema = Yup.object({
    payerEmail: Yup.string()
        .required('Please provide your email')
        .email('Invalid email'),
    valueInUSD: Yup.string()
        .required('Please enter amount')
        .matches(/[0-9]/, 'Invalid amount'),
})

export const transferMoneySchema = Yup.array().of(
    Yup.object({
        email: Yup.string()
            .email('Invalid email')
            .required('Please provide your email'),
        phone: Yup.string()
            .required('Please provide your phone no')
            .matches(/^\+\d{2,3}\d{9,10}$/, 'Invalid phone number'),
        valueInUSD: Yup.string()
            .required('Please enter amount')
            .matches(/[0-9]/, 'Invalid amount'),
        redeemData: Yup.object().shape({
            walletID: Yup.string(),
            interledgerWalletAddress: Yup.string(),
        }),
    }),
)
