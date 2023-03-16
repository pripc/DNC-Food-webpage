import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/home';
import Product from './pages/product/product'
import pratos from './mock/mock'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home data ={ pratos }/>,
  },
  {
    path: "products/:id",
    element: <Product data = { pratos }/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
