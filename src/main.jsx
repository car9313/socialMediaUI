import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ProviderDarkModeContext } from './contexts/DarkModeContext'
import { ProviderAuthContex } from './contexts/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProviderDarkModeContext>
      <ProviderAuthContex>
        <App />
      </ProviderAuthContex>
    </ProviderDarkModeContext>
  </React.StrictMode>
)
