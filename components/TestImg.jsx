import Image from "next/image"
import styles from "../styles/Img.module.css"
import qaImg from "../public/images/qa.png"

export default function TestImg(props) {
  return (
    <div className={styles.testcard}>
      <Image src={qaImg} width="300px" height="200px" />
    </div>
  )
}
