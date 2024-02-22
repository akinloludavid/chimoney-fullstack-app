import { Request, Response } from 'express'
import admin from '../../config/firebase'
import { signInWithEmailAndPassword, getAuth, signOut } from 'firebase/auth'
export const signUp = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body
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
        const token = await userResponse.user.getIdToken()
        return res.status(201).json({ user: userCredential, token })
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

        const token = await userCredential.user.getIdToken()
        const userResponse = {
            details: userCredential.user.providerData,
            email: userCredential.user.email,
        }
        return res.status(201).json({
            user: userResponse,
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
