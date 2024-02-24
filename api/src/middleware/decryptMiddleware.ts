import { Request, Response, NextFunction } from 'express'
import { decryptData } from '../utils/encryptions'

// Decrypt middleware
const decryptMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // Check if request body contains encrypted data
    if (req.body && req.body.encryptedData) {
        const encryptedData = req.body.encryptedData
        try {
            req.body = decryptData(encryptedData)

            // Continue to the next middleware or route handler
            next()
        } catch (error) {
            // If decryption fails, return an error response
            return res.status(400).json({ error: 'Failed to decrypt data' })
        }
    } else {
        // If no encrypted data found in the request, proceed to the next middleware or route handler
        next()
    }
}

export default decryptMiddleware
