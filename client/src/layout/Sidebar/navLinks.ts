import { MdDashboard, MdPayments } from 'react-icons/md'

import { FaMoneyBillTransfer } from 'react-icons/fa6'

export const navLinks = [
    {
        label: 'Dashboard',
        route: '/dashboard',
        icon: MdDashboard,
    },
    {
        label: 'Transactions',
        route: '/transactions',
        icon: FaMoneyBillTransfer,
    },
    {
        label: 'Payments',
        route: '/payments',
        icon: MdPayments,
    },
]
