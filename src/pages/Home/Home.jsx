import Posts from '../../components/Posts/Posts'
import Stories from '../../components/Stories/Stories'
import styles from './Home.module.css'

function Home() {
  return (
    <div className={styles.home}>
      <Stories />
      <Posts />
    </div>
  )
}
export default Home
