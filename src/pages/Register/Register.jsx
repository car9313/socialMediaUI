import { Link } from 'react-router-dom'
import styles from './Register.module.css'

function Register() {
  return (
    <div className={styles.register}>
      <div className={styles.card}>
        <div className={styles.left}>
          <h1 className={styles.left__title}>Clau Social</h1>
          <p className={styles.left__description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            ab.
          </p>
          <span>Lorem ipsum dolor sit amet.</span>
          <Link to="/login">
            <button className={styles.left__button} type="button">
              Login
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <h1 className={styles.right__title}>Login</h1>
          <form className={styles.form}>
            <input
              className={styles.form__input}
              type="text"
              placeholder="Name"
            />
            <input
              className={styles.form__input}
              type="text"
              placeholder="Username"
            />
            <input
              className={styles.form__input}
              type="email"
              placeholder="Email"
            />
            <input
              className={styles.form__input}
              type="password"
              placeholder="Password"
            />
            <button className={styles.form__button} type="button">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Register
