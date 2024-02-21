import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { CONFIG } from './config/config'
import { initializeApp } from 'firebase/app'
import authRouter from './routes/auth'
import paymentRouter from './routes/payment'
import walletRouter from './routes/wallet'
import transactionRouter from './routes/transaction'

import { connectDB } from './database/db'

const app = express()
const PORT = CONFIG.SERVER.PORT

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
const firebaseConfig = {
    apiKey: 'AIzaSyCqjMSPaIHL9amNfeu5aZPBgg5HjS-8xWw',
    authDomain: 'chimoney-task-api.firebaseapp.com',
    projectId: 'chimoney-task-api',
    storageBucket: 'chimoney-task-api.appspot.com',
    messagingSenderId: '1034607743115',
    appId: '1:1034607743115:web:65085a293713fe77a9848e',
}

initializeApp(firebaseConfig)
connectDB()
app.use('/v1', authRouter)
app.use('/v1', paymentRouter)
app.use('/v1', walletRouter)
app.use('/v1', transactionRouter)

app.listen(PORT, () => {
    if (process.env.NODE_ENV !== 'production')
        console.log('listening on port: ' + PORT)
})
