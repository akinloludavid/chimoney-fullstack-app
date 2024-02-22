import axios from 'axios'
import { useMutation } from '@tanstack/react-query'
import { baseUrl } from '../../api/config'
import { ISignUpPayload } from '../../types'
import { USER_AUTH_KEY } from '../../config/config'
import { DASHBOARD } from '../../routes/pathnames'
import { setLocalStorage } from '../../utils/helpers'
import { useCustomToast } from '../../utils/toast'

export const createAccount = async (payload: ISignUpPayload) => {
    const response = await axios.post(`${baseUrl}/auth/signup`, payload)
    console.log(response)
    return response
}

export const useCreateAccount = () => {
    const { successToast } = useCustomToast()
    return useMutation({
        mutationFn: (payload: ISignUpPayload) => createAccount(payload),
        mutationKey: ['/auth/signup'],
        onSuccess: res => {
            console.log(res)
            setLocalStorage(USER_AUTH_KEY, res.data)
            successToast('Login successful')
            setTimeout(() => {
                window.location.href = DASHBOARD
            }, 2000)
        },
    })
}
