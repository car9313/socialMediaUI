import Post from '../Post/Post'
import imgUser from '../../assets/img/img7.jpg'
import imgPost from '../../assets/img/img1.jpg'
import styles from './Posts.module.css'

const posts = [
  {
    id: 1,
    name: 'Clau',
    userId: 1,
    imgUser,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sequi.',
    imgPost,
  },
  {
    id: 2,
    name: 'Clau1',
    userId: 1,
    imgUser,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sequi.',
  },
]
function Posts() {
  return (
    <div className={styles.posts}>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  )
}
export default Posts
