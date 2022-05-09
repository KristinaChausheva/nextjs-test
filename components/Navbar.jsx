import Link from "next/link"
import styles from "../styles/Navbar.module.css"
const prefix = "/nextjs-test"

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="#">
        <img
          className={styles.logo}
          src={`${prefix}/images/output.png`}
          width="150"
          height="120"
          alt=""
        />
      </Link>

      <li className={styles.li}>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li className={styles.li}>
        <Link href="#skills">
          <a>My Tech Stack</a>
        </Link>
      </li>
      <li className={styles.li}>
        <Link href="/work">
          <a>Work</a>
        </Link>
      </li>
      <li className={styles.li}>
        <Link href="#contacts">
          <a>Contact</a>
        </Link>
      </li>
      <li className={styles.li}>
        <Link href="#blog">
          <a>Blog </a>
        </Link>
      </li>
    </nav>
  )
}

export default Navbar
