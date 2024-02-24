import { ENCRYPTION_KEY } from '../api/config'
import { USER_AUTH_KEY } from '../config/config'
import CryptoJS, { AES } from 'crypto-js'

export const encryptData = (data: any): string => {
    const secretKey = ENCRYPTION_KEY
    const encryptedData = AES.encrypt(
        JSON.stringify(data),
        secretKey,
    ).toString()
    return encryptedData
}

export const decryptData = (encryptedData: string) => {
    const secretKey = ENCRYPTION_KEY
    if (!encryptedData) {
        return ''
    }
    const decryptedData = AES.decrypt(encryptedData, secretKey).toString(
        CryptoJS.enc.Utf8,
    )
    return JSON.parse(decryptedData)
}

export const getFromLocalStorage = (key: string) => {
    return decryptData(localStorage.getItem(key) as string)
}

export const setLocalStorage = (key: string, data: any) => {
    localStorage.setItem(key, encryptData(data))
}
export const userInfo = getFromLocalStorage(USER_AUTH_KEY)
export const isNavActive = (route: string) => {
    return window.location.pathname.includes(route)
}
export const formatYupError = (err: any) => {
    let errList = {}
    err.inner.forEach((e: any) => {
        errList = {
            ...errList,
            [e.path]: e.message,
        }
    })
    return errList
}
