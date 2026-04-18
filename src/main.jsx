import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router/dom'
import Router from './Components/Router/Router.jsx'
import InstalledAppsProvider from './Context/InstalledAppsProvider.jsx'


  
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <InstalledAppsProvider>
     <RouterProvider router={Router}>
    </RouterProvider>
   </InstalledAppsProvider>
  </StrictMode>,
)
