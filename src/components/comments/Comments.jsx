import styles from './Comments.module.css'
import imgUser from '../../assets/img/img7.jpg'
import useAuthContext from '../../hooks/useAuthContext'

const comments = [
  {
    id: 1,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam',
    name: 'John Doe',
    userId: 1,
    imgUser,
  },
  {
    id: 2,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam',
    name: 'Jane Doe',
    userId: 2,
    imgUser,
  },
]
function Comments() {
  const { currentUser } = useAuthContext()
  return (
    <div className={styles.comments}>
      <form className={styles.comments__form}>
        <img
          className={styles.comments__img}
          src={currentUser.imgUser}
          alt=""
        />
        <input
          className={styles.comments__input}
          type="text"
          placeholder="write a comment"
        />
        <button className={styles.comments__action} type="button">
          Send
        </button>
      </form>
      {comments.map((comment) => (
        <div className={styles.comments__comment}>
          <img className={styles.comments__img} src={comment.imgUser} alt="" />
          <div className={styles.comment__info}>
            <span className={styles.comment__info__name}>{comment.name}</span>
            <p className={styles.comment__info__des}>{comment.desc}</p>
          </div>
          <span className={styles.comment__date}>1 hour ago</span>
        </div>
      ))}
    </div>
  )
}
export default Comments
