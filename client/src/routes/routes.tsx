/* eslint-disable react-refresh/only-export-components */

import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import WithSuspense from '../components/WithSuspense'
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

const SignUpPage = WithSuspense(lazy(() => import('../pages/Signup')))
const LoginPage = WithSuspense(lazy(() => import('../pages/Login')))
const TransactionsPage = WithSuspense(
    lazy(() => import('../pages/Transactions')),
)
const PaymentsPage = WithSuspense(lazy(() => import('../pages/Payments')))
const RatesPage = WithSuspense(lazy(() => import('../pages/Rates')))
const DashboardPage = WithSuspense(lazy(() => import('../pages/Dashboard')))

export const PublicRoutes: IAppRoute[] = [
    { path: HOME, element: <Navigate to={LOGIN_PAGE} /> },
    { path: SIGNUP_PAGE, element: <SignUpPage /> },
    { path: LOGIN_PAGE, element: <LoginPage /> },
    { path: '*', element: <Navigate to={LOGIN_PAGE} /> },
]

export const PrivateRoutes: IAppRoute[] = [
    { path: DASHBOARD, element: <DashboardPage /> },
    { path: TRANSACTIONS, element: <TransactionsPage /> },
    { path: PAYMENTS, element: <PaymentsPage /> },
    { path: RATES, element: <RatesPage /> },
    { path: '*', element: <Navigate to={DASHBOARD} /> },
]

/* eslint-disable react-refresh/only-export-components */
