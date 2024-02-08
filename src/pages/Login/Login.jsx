import { Link } from 'react-router-dom'
import { useContext } from 'react'
import styles from './Login.module.css'
import { AuthContext } from '../../contexts/AuthContext'

function Login() {
  const { login } = useContext(AuthContext)
  return (
    <div className={styles.login}>
      <div className={styles.card}>
        <div className={styles.left}>
          <h1 className={styles.left__title}>Hello World</h1>
          <p className={styles.left__description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            ab.
          </p>
          <span>Lorem ipsum dolor sit amet.</span>
          <Link to="/register">
            <button className={styles.left__button} type="button">
              Register
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <h1 className={styles.right__title}>Login</h1>
          <form className={styles.form}>
            <input
              className={styles.form__input}
              type="text"
              placeholder="Username"
            />
            <input
              className={styles.form__input}
              type="password"
              placeholder="Password"
            />
            <button
              className={styles.form__button}
              type="button"
              onClick={login}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login
