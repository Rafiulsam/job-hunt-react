import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Root from './components/layout/Root/Root.jsx'
import Statistics from './components/Statistics/Statistics.jsx'
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx'
import Blog from './components/Blog/Blog.jsx'
import fetchCategories from './loader/loadCategories.js'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: fetchCategories
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/appliedJobs',
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
