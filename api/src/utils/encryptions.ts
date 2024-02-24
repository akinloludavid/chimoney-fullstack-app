import CryptoJS, { AES } from 'crypto-js'
import { CONFIG } from '../config/config'

export const encryptData = (data: any): string => {
    const secretKey = CONFIG.ENCRYPTION_KEY
    const encryptedData = AES.encrypt(
        JSON.stringify(data),
        secretKey,
    ).toString()
    return encryptedData
}

export const decryptData = (encryptedData: string) => {
    const secretKey = CONFIG.ENCRYPTION_KEY
    if (!encryptedData) {
        return ''
    }
    const decryptedData = AES.decrypt(encryptedData, secretKey).toString(
        CryptoJS.enc.Utf8,
    )
    return JSON.parse(decryptedData)
}
