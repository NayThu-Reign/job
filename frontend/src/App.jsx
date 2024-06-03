import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from './pages/Home'
import Layout from './Layout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  }
])


export default function App() {
  return <RouterProvider router={router} />
}
