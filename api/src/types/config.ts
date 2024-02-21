export type ProjectConfiguration = {
    DATABASE: {
        HOST: string
        USERNAME: string
        PASSWORD: string
        NAME: string
    }

    SERVER: {
        PORT: string | number
    }
    SERVICE_NAME: string
    LOG_LEVEL: string
    CHIMONEY: {
        BASE_URL: string
        API_KEY: string
    }
    JWT_SECRET_KEY: string
}
