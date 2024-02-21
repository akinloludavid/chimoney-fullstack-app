import axios, {
    AxiosInstance,
    AxiosResponse,
    AxiosError,
    InternalAxiosRequestConfig,
} from 'axios'
import { CONFIG } from './config'

const axiosInstance: AxiosInstance = axios.create({
    baseURL: CONFIG.CHIMONEY.BASE_URL + '/v0.2',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json, text/plain, */*',
        'X-API-KEY': CONFIG.CHIMONEY.API_KEY,
    },
})

const onRequest = (
    request: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig => {
    return request
}

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error)
}

const onResponse = (response: AxiosResponse): AxiosResponse => {
    return response
}

const onResponseError = async (error: AxiosError) => {
    const statusCode = error.response!.status
    const originalRequest: any = error.config
    if (statusCode === 403) {
        return axiosInstance(originalRequest)
    }
    return Promise.reject(error)
}

axiosInstance.interceptors.request.use(onRequest, onRequestError)
axiosInstance.interceptors.response.use(onResponse, onResponseError)

export default axiosInstance
