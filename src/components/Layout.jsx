import { Outlet } from 'react-router-dom'
import { useContext } from 'react'
import Leftbar from './Leftbar/Leftbar'
import Navbar from './Navbar/Navbar'
import Rightbar from './Rightbar/Rightbar'
import styles from './Layout.module.css'
import { DarkModeContext } from '../contexts/DarkModeContext'

function Layout() {
  const { darkMode } = useContext(DarkModeContext)
  return (
    <div className={darkMode ? styles.dark : styles.light}>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Leftbar />
        <div className={styles.layout}>
          <Outlet />
        </div>
        <Rightbar />
      </div>
    </div>
  )
}
export default Layout
