import styles from "../styles/Scroll.module.css"

function Scroll() {
  return (
    <div className={styles.scrolls}>
      <div className={styles.scrollLeft}>scroll down &rarr;</div>
      <div className={styles.scrollRight}>scroll down &rarr;</div>
    </div>
  )
}

export default Scroll
