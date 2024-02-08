import styles from './Leftbar.module.css'
import Friends from '../../assets/img/1.png'
import Groups from '../../assets/img/2.png'
import Market from '../../assets/img/3.png'
import Watch from '../../assets/img/4.png'
import Memories from '../../assets/img/5.png'
import Events from '../../assets/img/6.png'
import Gaming from '../../assets/img/7.png'
import Gallery from '../../assets/img/8.png'
import Videos from '../../assets/img/9.png'
import Messages from '../../assets/img/10.png'
import Tutorials from '../../assets/img/11.png'
import Courses from '../../assets/img/12.png'
import Fund from '../../assets/img/13.png'
import useAuthContext from '../../hooks/useAuthContext'

function Leftbar() {
  const { currentUser } = useAuthContext()
  return (
    <div className={styles.leftbar}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <div className={styles.user}>
            <img
              className={styles.user__img}
              src={currentUser.imgUser}
              alt="imagen del usuario logueado"
            />
            <span className={styles.item__text}>{currentUser.name}</span>
          </div>
          <div className={styles.item}>
            <img className={styles.item__img} src={Friends} alt="" />
            <span className={styles.item__text}>Friends</span>
          </div>
          <div className={styles.item}>
            <img className={styles.item__img} src={Groups} alt="" />
            <span className={styles.item__text}>Groups</span>
          </div>
          <div className={styles.item}>
            <img className={styles.item__img} src={Market} alt="" />
            <span className={styles.item__text}>Marketplace</span>
          </div>
          <div className={styles.item}>
            <img className={styles.item__img} src={Watch} alt="" />
            <span className={styles.item__text}>Watch</span>
          </div>
          <div className={styles.item}>
            <img className={styles.item__img} src={Memories} alt="" />
            <span className={styles.item__text}>Memories</span>
          </div>
        </div>
        <hr />
        <div className={styles.menu}>
          <span className={styles.item__text}>Your shortcuts</span>
          <div className={styles.item}>
            <img className={styles.item__img} src={Events} alt="" />
            <span className={styles.item__text}>Events</span>
          </div>
          <div className={styles.item}>
            <img className={styles.item__img} src={Gaming} alt="" />
            <span className={styles.item__text}>Gaming</span>
          </div>
          <div className={styles.item}>
            <img className={styles.item__img} src={Gallery} alt="" />
            <span className={styles.item__text}>Gallery</span>
          </div>
          <div className={styles.item}>
            <img className={styles.item__img} src={Videos} alt="" />
            <span className={styles.item__text}>Videos</span>
          </div>
          <div className={styles.item}>
            <img className={styles.item__img} src={Messages} alt="" />
            <span className={styles.item__text}>Messages</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Leftbar
