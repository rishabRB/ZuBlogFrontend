import { createBrowserRouter, Navigate, redirect, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import BlogPage from './Pages/BlogPage';
import Login from './Pages/Login';
import Register from './Pages/Register';
import UserDashborad from './Pages/UserDashborad';
import BasicLoading from './Pages/BasicLoadin';
import SearchPage from './Pages/SearchPage';
import HomeLoading from './Pages/HomeLoading';



const router = createBrowserRouter([
  {
    path:"/",
    element : <HomeLoading />
  },
  {
    path:"/home",
    element : <Home />
  },
  {
    path:"/blog/:id",
    element : <BlogPage />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/loginLoading",
    element: <BasicLoading />
  },
  {
    path: "/dashboard",
    element:<UserDashborad />
  },
  {
    path:"/search",
    element: <SearchPage />
  }
])


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
