import styles from "../styles/Img.module.css"
import TestImg from "../components/TestImg"

function test() {
  return (
    <div className={styles.test}>
      <h1>Test page!</h1>
      <TestImg />
    </div>
  )
}

export default test
