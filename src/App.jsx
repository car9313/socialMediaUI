import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Profile from './pages/Profile/Profile'
import Layout from './components/Layout'

function ProtectedRoute({ currentUser, children }) {
  return !currentUser ? <Navigate to="./login" /> : children
}

function App() {
  const currentUser = true

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute currentUser={currentUser}>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/profile/:id',
          element: <Profile />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ])

  return <RouterProvider router={router} />
}

export default App
