import { useMutation } from '@tanstack/react-query'
import axiosInstance from '../../api'
import { USER_AUTH_KEY } from '../../config/config'
import { LOGIN_PAGE } from '../../routes/pathnames'
import { useCustomToast } from '../../utils/toast'

export const accountLogout = async () => {
    const response = await axiosInstance.post(`/auth/logout`)
    return response
}

export const useAccountLogout = () => {
    const { successToast } = useCustomToast()
    return useMutation({
        mutationFn: accountLogout,
        mutationKey: ['/auth/logout'],
        onSuccess: () => {
            localStorage.removeItem(USER_AUTH_KEY)
            successToast('Logout successful')
            setTimeout(() => {
                window.location.href = LOGIN_PAGE
            }, 3000)
        },
    })
}
