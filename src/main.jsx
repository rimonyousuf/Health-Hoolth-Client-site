import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Food from './components/Food/Food';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch ('http://localhost:5000/foods/')
      },
      {
        path: "/foods/:id",
        element: <Food></Food>,
        loader: ({params})=> fetch (`http://localhost:5000/foods/${params.id}`)
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: ()=> fetch('http://localhost:5000/blogs')
      },
      {
        path: "/about",
        element: <About></About>,
        loader: ()=> fetch('http://localhost:5000/chefs')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
