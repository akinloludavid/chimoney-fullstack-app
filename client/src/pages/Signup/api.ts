import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { baseUrl } from '../../api/config'
import { ISignUpPayload } from '../../types'
import { USER_AUTH_KEY } from '../../config/config'
import { DASHBOARD } from '../../routes/pathnames'
import { encryptData, setLocalStorage } from '../../utils/helpers'
import { useCustomToast } from '../../utils/toast'

export const createAccount = async (payload: ISignUpPayload) => {
    const encryptedData = {
        encryptedData: encryptData(payload),
    }
    const response = await axios.post(`${baseUrl}/auth/signup`, encryptedData)
    return response
}

export const useCreateAccount = () => {
    const { successToast } = useCustomToast()
    return useMutation({
        mutationFn: (payload: ISignUpPayload) => createAccount(payload),
        mutationKey: ['/auth/signup'],
        onSuccess: res => {
            setLocalStorage(USER_AUTH_KEY, res.data)
            successToast('Sign up successful')
            setTimeout(() => {
                window.location.href = DASHBOARD
            }, 2000)
        },
    })
}
