import CardItem from '../CardItem/CardItem'
import styles from './Rightbar.module.css'

function Rightbar() {
  return (
    <div className={styles.rightbar}>
      <div className={styles.container}>
        <CardItem>
          <span className={styles.item__text}>Suggestions For You</span>
          <div className={styles.user}>
            <div className={styles.user__info}>
              <img
                className={styles.user__img}
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span className={styles.user__name}>Jane Doe</span>
            </div>
            <div className={styles.user__buttons}>
              <button className={styles.user__button} type="button">
                follow
              </button>
              <button className={styles.user__button} type="button">
                dismiss
              </button>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.user__info}>
              <img
                className={styles.user__img}
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span className={styles.user__name}>Jane Doe</span>
            </div>
            <div className={styles.user__buttons}>
              <button className={styles.user__button} type="button">
                follow
              </button>
              <button className={styles.user__button} type="button">
                dismiss
              </button>
            </div>
          </div>
        </CardItem>
        <CardItem>
          <span className={styles.item__text}>Latest Activities</span>
          <div className={styles.user}>
            <div className={styles.user__info}>
              <img
                className={styles.user__img}
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p className={styles.user__des}>
                <span className={styles.user__name}>Jane Doe</span>
                changed their cover picture
              </p>
            </div>
            <span className={styles.item__text}>1 min ago</span>
          </div>
          <div className={styles.user}>
            <div className={styles.user__info}>
              <img
                className={styles.user__img}
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p className={styles.user__des}>
                <span className={styles.user__name}>Jane Doe</span>
                changed their cover picture
              </p>
            </div>
            <span className={styles.item__text}>1 min ago</span>
          </div>
          <div className={styles.user}>
            <div className={styles.user__info}>
              <img
                className={styles.user__img}
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p className={styles.user__des}>
                <span className={styles.user__name}>Jane Doe</span>
                changed their cover picture
              </p>
            </div>
            <span className={styles.item__text}>1 min ago</span>
          </div>
          <div className={styles.user}>
            <div className={styles.user__info}>
              <img
                className={styles.user__img}
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <p className={styles.user__des}>
                <span className={styles.user__name}>Jane Doe</span>
                changed their cover picture
              </p>
            </div>
            <span className={styles.item__text}>1 min ago</span>
          </div>
        </CardItem>
        <CardItem>
          <span className={styles.user__text}>Online Friends</span>
          <div className={styles.user}>
            <div className={styles.user__info}>
              <img
                className={styles.user__img}
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span className={styles.user__name}>Jane Doe</span>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.user__info}>
              <img
                className={styles.user__img}
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span className={styles.user__name}>Jane Doe</span>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.user__info}>
              <img
                className={styles.user__img}
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span className={styles.user__name}>Jane Doe</span>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.user__info}>
              <img
                className={styles.user__img}
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span className={styles.user__name}>Jane Doe</span>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.user__info}>
              <img
                className={styles.user__img}
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span className={styles.user__name}>Jane Doe</span>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.user__info}>
              <img
                className={styles.user__img}
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span className={styles.user__name}>Jane Doe</span>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.user__info}>
              <img
                className={styles.user__img}
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span className={styles.user__name}>Jane Doe</span>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.user__info}>
              <img
                className={styles.user__img}
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span className={styles.user__name}>Jane Doe</span>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.user__info}>
              <img
                className={styles.user__img}
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span className={styles.user__name}>Jane Doe</span>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.user__info}>
              <img
                className={styles.user__img}
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span className={styles.user__name}>Jane Doe</span>
            </div>
          </div>
          <div className={styles.user}>
            <div className={styles.user__info}>
              <img
                className={styles.user__img}
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span className={styles.user__name}>Jane Doe</span>
            </div>
          </div>
        </CardItem>
      </div>
    </div>
  )
}
export default Rightbar
