import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import User from './components/User'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <> <Navbar /><Home /></>
    },
    {
      path: '/login',
      element: <> <Navbar /><Login /></>
    },
    {
      path: '/signup',
      element: <> <Navbar /><Signup /></>
    },
    {
      path: '/User/:username',
      element: <User/>
    },
  ])

  return (
    <>
      
      <RouterProvider router={router} />
    </>
  )
}

export default App
