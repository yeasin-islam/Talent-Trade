import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router/router'
import AuthProvider from './context/AuthContext/AuthProvider'
import {  QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router'
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <div>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </QueryClientProvider>
    </div>
  </StrictMode>,
)
