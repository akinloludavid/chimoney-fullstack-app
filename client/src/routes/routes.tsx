import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import WithSuspense from '../components/WithSuspense'
import Dashboard from '../pages/Dashboard'
import Transaction from '../pages/Transactions'
import { IAppRoute } from '../types'
import {
    DASHBOARD,
    HOME,
    LOGIN_PAGE,
    PAYMENTS,
    RATES,
    SIGNUP_PAGE,
    TRANSACTIONS,
} from './pathnames'

const HomePage = WithSuspense(lazy(() => import('../pages/Home')))
const SignUpPage = WithSuspense(lazy(() => import('../pages/Signup')))
const LoginPage = WithSuspense(lazy(() => import('../pages/Login')))
const TransactionsPage = WithSuspense(
    lazy(() => import('../pages/Transactions')),
)
const PaymentsPage = WithSuspense(lazy(() => import('../pages/Payments')))
const RatesPage = WithSuspense(lazy(() => import('../pages/Rates')))

export const PublicRoutes: IAppRoute[] = [
    { path: HOME, element: <HomePage /> },
    { path: SIGNUP_PAGE, element: <SignUpPage /> },
    { path: LOGIN_PAGE, element: <LoginPage /> },

    { path: '*', element: <Navigate to={LOGIN_PAGE} /> },
]

export const PrivateRoutes: IAppRoute[] = [
    { path: DASHBOARD, element: <Dashboard /> },
    { path: TRANSACTIONS, element: <Transaction /> },
    { path: PAYMENTS, element: <PaymentsPage /> },
    { path: RATES, element: <RatesPage /> },

    { path: '*', element: <Navigate to={DASHBOARD} /> },
]
