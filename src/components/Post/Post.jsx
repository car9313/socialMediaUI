import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { Link } from 'react-router-dom'

import { useState } from 'react'
import styles from './Post.module.css'
import Comments from '../comments/Comments'

function Post({ post }) {
  const liked = false
  const [commentOpen, setCommentOpen] = useState(false)
  const prueba = () => {
    setCommentOpen(!commentOpen)
  }
  return (
    <div className={styles.post}>
      <div className={styles.container}>
        <div className={styles.user}>
          <div className={styles.user__info}>
            <img className={styles.user__img} src={post.imgUser} alt="" />
            <div className={styles.user__details}>
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <span className={styles.user__details__name}>{post.name}</span>
              </Link>
              <span className={styles.user__details__date}>1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className={styles.content}>
          <p>{post.desc}</p>
          <img className={styles.content__img} src={post.imgPost} alt="" />
        </div>
        <div className={styles.content__info}>
          <div className={styles.content__item}>
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            12 Likes
          </div>
          <div className={styles.content__item}>
            <TextsmsOutlinedIcon onClick={prueba} />
            12 Comments
          </div>
          <div className={styles.content__item}>
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  )
}
export default Post
