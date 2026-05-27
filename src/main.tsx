import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router';
import QueryProvider from './providers/QueryProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  </StrictMode>,
)
