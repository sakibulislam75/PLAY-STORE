import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router'
import RootLayout from './LayOut/RootLayout.jsx'
import { RouterProvider } from 'react-router/dom'
import Home from './Pages/Home/Home.jsx'
import Apps from './Pages/Apps/Apps.jsx'
import Installation from './Pages/Installation/Installation.jsx'
import Notfound from './Pages/Notfound/Notfound.jsx'
const router = createBrowserRouter([
  { 
    path: '/',
    Component: RootLayout,
    children: [
      {index: true,
       Component:Home,
      loader: () => fetch('/data.json')},
      {path:'/Apps',Component:Apps},
      {path:'/Installation',Component:Installation}
    ]
  },
  {
    path: '*',
   Component:Notfound
  }
])
  
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </StrictMode>,
)
