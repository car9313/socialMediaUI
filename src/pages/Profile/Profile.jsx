import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import PinterestIcon from '@mui/icons-material/Pinterest'
import TwitterIcon from '@mui/icons-material/Twitter'
import PlaceIcon from '@mui/icons-material/Place'
import LanguageIcon from '@mui/icons-material/Language'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import styles from './Profile.module.css'
import imgUser from '../../assets/img/img7.jpg'
import imgPost from '../../assets/img/img1.jpg'
import Posts from '../../components/Posts/Posts'

function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.profile__images}>
        <img className={styles.profile__image__bg} src={imgPost} alt="" />
        <img className={styles.profile__image} src={imgUser} alt="" />
      </div>
      <div className={styles.profile__container}>
        <div className={styles.profile__userInfo}>
          <div className={styles.profile__userInfo__left}>
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className={styles.profile__userInfo__center}>
            <span className={styles.profile__userInfo__name}>Jane Doe</span>
            <div className={styles.profile__userInfo__info}>
              <div className={styles.profile__userInfo__item}>
                <PlaceIcon />
                <span className={styles.profile__userInfo__item__text}>
                  USA
                </span>
              </div>
              <div className={styles.profile__userInfo__item}>
                <LanguageIcon />
                <span className={styles.profile__userInfo__item__text}>
                  lama.dev
                </span>
              </div>
            </div>
            <button className={styles.profile__userInfo__action} type="button">
              follow
            </button>
          </div>
          <div className={styles.profile__userInfo__right}>
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  )
}
export default Profile
