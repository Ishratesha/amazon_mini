import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layout/Main.jsx'
import Mobile from './Pages/Mobile/Mobile.jsx'


const routes=createBrowserRouter([
 {
  path:'/',
  element:<Main></Main>,
  children:[
    {
    path:'/mobile',
    element:<Mobile/> ,
    loader: () => fetch('https://fakestoreapi.com/products'),
    }
  ]
 },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
  <RouterProvider router={routes}>
  <App/>
  </RouterProvider>
  
  </React.StrictMode>,
)
