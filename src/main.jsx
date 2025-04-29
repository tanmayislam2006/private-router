import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PrivateContextProvider from './Context/PrivateContextProvider.jsx'
import { RouterProvider } from 'react-router'
import router from './Routers/Routers.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrivateContextProvider>
      <RouterProvider router={router}/>
    </PrivateContextProvider>
  </StrictMode>,
)
