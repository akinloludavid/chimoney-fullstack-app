import admin, { ServiceAccount } from 'firebase-admin'
import serviceAcount from './serviceAccount.json'
admin.initializeApp({
    credential: admin.credential.cert(serviceAcount as ServiceAccount),
})

// export const firebase
export default admin
