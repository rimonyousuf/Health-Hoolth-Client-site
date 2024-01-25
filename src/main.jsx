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
import Terms from './components/Terms/Terms';
import AuthProvider from './Provider/AuthProvider';
import Profile from './components/Profile/Profile';
import PrivateRouter from './Private/PrivateRouter';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://health-hoolth-server-9k609jj0c-rimonyousufs-projects.vercel.app/foods/')
      },
      {
        path: "/foods/:id",
        element: <PrivateRouter><Food></Food></PrivateRouter>,
        loader: ({ params }) => fetch(`https://health-hoolth-server-9k609jj0c-rimonyousufs-projects.vercel.app/foods/${params.id}`)
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch('https://health-hoolth-server-9k609jj0c-rimonyousufs-projects.vercel.app/blogs')
      },
      {
        path: "/about",
        element: <About></About>,
        loader: () => fetch('https://health-hoolth-server-9k609jj0c-rimonyousufs-projects.vercel.app/chefs')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/profile",
        element: <PrivateRouter><Profile></Profile></PrivateRouter>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/terms",
        element: <Terms></Terms>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
