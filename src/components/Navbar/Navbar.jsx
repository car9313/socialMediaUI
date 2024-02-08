import AddHomeOutlinedIcon from '@mui/icons-material/AddHomeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import styles from './Navbar.module.css'

import { DarkModeContext } from '../../contexts/DarkModeContext'

import useAuthContext from '../../hooks/useAuthContext'

function Navbar() {
  const { darkMode, toogleDarkMode } = useContext(DarkModeContext)
  const { currentUser } = useAuthContext()
  return (
    <div className={styles.navbar}>
      <div className={styles.left}>
        <Link className={styles.logo} to="/">
          <span>ClauSocial</span>
        </Link>
        <AddHomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toogleDarkMode} />
        ) : (
          <DarkModeOutlinedIcon onClick={toogleDarkMode} />
        )}
        <GridViewOutlinedIcon />
        <div className={styles.search}>
          <SearchOutlinedIcon />
          <input className={styles.input} type="text" placeholder="Search..." />
        </div>
      </div>
      <div className={styles.right}>
        <PersonOutlineOutlinedIcon />
        <EmailOutlinedIcon />
        <NotificationsNoneOutlinedIcon />
        <div className={styles.user}>
          <img className={styles.user__img} src={currentUser.imgUser} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  )
}
export default Navbar
