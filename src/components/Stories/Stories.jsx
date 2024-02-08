import imgUser from '../../assets/img/img7.jpg'
import useAuthContext from '../../hooks/useAuthContext'
import styles from './Stories.module.css'

const stories = [
  {
    id: 1,
    name: 'Clau',
    imgUser,
  },
  {
    id: 2,
    name: 'Clau',
    imgUser,
  },
  {
    id: 3,
    name: 'Clau',
    imgUser,
  },
]
function Stories() {
  const { currentUser } = useAuthContext()
  return (
    <div className={styles.stories}>
      <div className={styles.story}>
        <img className={styles.story__img} src={currentUser.imgUser} alt="" />
        <span className={styles.story__name}>{currentUser.name}</span>
        <button className={styles.story__action} type="button">
          +
        </button>
      </div>
      {stories.map((story) => (
        <div className={styles.story} key={story.id}>
          <img className={styles.story__img} src={story.imgUser} alt="" />
          <span className={styles.story__name}>{story.name}</span>
        </div>
      ))}
    </div>
  )
}
export default Stories
