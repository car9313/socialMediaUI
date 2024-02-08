import { createContext, useEffect, useState } from 'react'
import imgUser from '../assets/img/img7.jpg'

export const AuthContext = createContext()

export function ProviderAuthContex({ children }) {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('currentUser')) || null
  )
  const login = () => {
    setCurrentUser({
      id: 1,
      name: 'Clau',
      imgUser,
    })
  }
  useEffect(() => {
    localStorage.setItem('currentUser', JSON.stringify(currentUser))
  }, [currentUser])
  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  )
}
