import { USER_AUTH_KEY } from '../config/config'

export const getFromLocalStorage = (key: string) => {
    return JSON.parse(localStorage.getItem(key) as string)
}

export const setLocalStorage = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data))
}
export const userInfo = getFromLocalStorage(USER_AUTH_KEY)

export const isNavActive = (route: string) => {
    return window.location.pathname.includes(route)
}
export const formatYupError = (err: any) => {
    let errList = {}
    console.log(err.errors)
    err.inner.forEach((e: any) => {
        errList = {
            ...errList,
            [e.path]: e.message,
        }
    })
    return errList
}