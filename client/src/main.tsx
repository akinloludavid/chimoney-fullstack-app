import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import { customTheme } from './stylesConfig/theme'
// Supports weights 100-900
import '@fontsource-variable/raleway'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        },
    },
})
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <ChakraProvider theme={customTheme}>
                    <App />
                </ChakraProvider>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>,
)
