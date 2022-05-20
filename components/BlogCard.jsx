import styles from "../styles/BlogCard.module.css"
import Image from "next/image"
import qa from "../public/images/qa.png"
const prefix = "/nextjs-test"

function BlogCard() {
  return (
    <div className={styles.card}>
      {/* <img
        alt="Vercel logo"
        src={`${prefix}/images/qa.png`}
        width={300}
        height={330}
      /> */}
    </div>
  )
}

export default BlogCard
