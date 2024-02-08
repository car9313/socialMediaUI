import styles from './CardItem.module.css'

function CardItem({ children }) {
  return <div className={styles.item}>{children}</div>
}
export default CardItem
