import dotenv from 'dotenv-safe'
import type { ProjectConfiguration } from '../types/config'

dotenv.config({
    allowEmptyValues: true,
})

const DB_HOST = process.env.DB_HOST || ''
const DB_USERNAME = process.env.DB_USERNAME || ''
const DB_PASSWORD = process.env.DB_PASSWORD || ''
const DB_DATABASE = process.env.DB_DATABASE || ''
const JWT_SECRET_KEY = process.env.JWT_SECRET as string // Change this to your actual secret key

const SERVER_PORT = process.env.SERVER_PORT || 9999

const SERVICE_NAME = process.env.SERVICE_NAME || 'Microservice'
const LOG_LEVEL = process.env.LOG_LEVEL || 'info'
const CHIMONEY_URL = process.env.CHIMONEY_URL || ''
const CHIMONEY_API_KEY = process.env.CHIMONEY_API_KEY || ''
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || ''
// this will contain global configs for the project
export const CONFIG: ProjectConfiguration = {
    DATABASE: {
        HOST: DB_HOST,
        USERNAME: DB_USERNAME,
        PASSWORD: DB_PASSWORD,
        NAME: DB_DATABASE,
    },
    SERVER: {
        PORT: SERVER_PORT,
    },
    CHIMONEY: {
        BASE_URL: CHIMONEY_URL,
        API_KEY: CHIMONEY_API_KEY,
    },
    SERVICE_NAME,
    LOG_LEVEL,
    JWT_SECRET_KEY,
    ENCRYPTION_KEY,
}
