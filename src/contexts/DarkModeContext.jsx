import { createContext, useEffect, useState } from 'react'

export const DarkModeContext = createContext()

export function ProviderDarkModeContext({ children }) {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('darkMode')) || false
  )
  const toogleDarkMode = () => {
    console.log('Dark Mode')
    setDarkMode(!darkMode)
  }
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])
  return (
    <DarkModeContext.Provider value={{ darkMode, toogleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}
