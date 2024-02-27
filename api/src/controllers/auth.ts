import { Request, Response } from 'express'
import admin from '../config/firebase'
import { signInWithEmailAndPassword, getAuth, signOut } from 'firebase/auth'
import axiosInstance from '../config/axios'
import { encryptData } from '../utils/encryptions'
export const signUp = async (req: Request, res: Response) => {
    try {
        const { email, password, phoneNumber, firstName, lastName } = req.body
        const userCredential = await admin.auth().createUser({
            email,
            password,
        })
        const auth = getAuth()
        const userResponse = await signInWithEmailAndPassword(
            auth,
            email,
            password,
        )
        const subAccountPayload = {
            email,
            phoneNumber,
            firstName,
            lastName,
            name: `${firstName} ${lastName}`,
        }
        const subAccount = await axiosInstance.post(
            `/sub-account/create`,
            subAccountPayload,
        )
        const token = await userResponse.user.getIdToken()
        return res.status(201).json({
            user: userCredential,
            subAccount: subAccount.data?.data,
            token,
        })
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}

export const logIn = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
        await admin.auth().getUserByEmail(email)
        const auth = getAuth()
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password,
        )
        const resp = await axiosInstance.get(`/sub-account/list`)
        const usersArray = resp.data?.data
        const loggedInUserData = usersArray?.filter(
            (el: any) => el.email === email,
        )[0]
        const token = await userCredential.user.getIdToken()
        const userResponse = {
            details: userCredential.user.providerData,
            email: userCredential.user.email,
        }
        return res.status(201).json({
            user: userResponse,
            subAccount: loggedInUserData,
            token,
        })
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}

export const logOut = async (req: Request, res: Response) => {
    try {
        const auth = getAuth()
        signOut(auth)
            .then(() => res.status(200).json({ message: 'Logout successful' }))
            .catch(error => res.status(400).send({ message: error.message }))
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}

export const getAllSubAccounts = async (req: Request, res: Response) => {
    try {
        const resp = await axiosInstance.get(`/sub-account/list`)
        const usersArray = resp.data?.data || resp?.data
        return res.json({
            data: encryptData(usersArray),
            status: 'success',
        })
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}
