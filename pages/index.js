import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

import Link from "next/link"

const prefix = "/nextjs-test"

import Form from "../components/Form"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Front End Developer | Designer | Kristina Simon | Kristina Chausheva
        </title>
        <meta
          name="description"
          content="Kristina Chausheva Kristina Simon portfolio"
        />
        <link
          rel="icon"
          type="image/png"
          href="nextjs-test/public/images/favicon.png"
        />
      </Head>

      <script src="https://apps.elfsight.com/p/platform.js" defer></script>
      <div className="elfsight-app-8a804252-3e4b-4bde-91ae-73e52ade35d7"></div>

      {/* navbar */}

      <nav className="nav">
        <img className="logo" src={`${prefix}/images/kslogo.png`} alt="" />
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="#skills">
            <a>My Skills</a>
          </Link>
        </li>
        <li>
          <Link href="/work">
            <a>Work</a>
          </Link>
        </li>
        <li>
          <Link href="#contacts">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="#blog">
            <a>Blog </a>
          </Link>
        </li>
      </nav>

      {/* landing section */}

      <section className={styles.sectionHome}>
        <div className="box">
          <h1 className="greeting">Hi, I am Kristina Simon</h1>
          <h2 className="loader">
            <span className="m">W</span>
            <span className="m">E</span>
            <span className="m">B</span>
            <span className="m">&nbsp;</span>
            <span className="m">D</span>
            <span className="m">E</span>
            <span className="m">V</span>
            <span className="m">E</span>
            <span className="m">L</span>
            <span className="m">O</span>
            <span className="m">P</span>
            <span className="m">E</span>
            <span className="m">R</span>
          </h2>
          <a href="#contacts">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Contact me
          </a>
        </div>
        <div className="scroll-left">scroll down &rarr;</div>
        <div className="scroll-right">scroll down &rarr;</div>
      </section>

      {/* My Skills section*/}

      <section className={styles.sectionMySkills} id="skills">
        <h2>End to End Solutions:</h2>
        <div>
          <p>1. Design & Prototyping With Figma,</p>
          <p>2. Implementation with :</p>
          <p> - Client side: ReactJS and NextJS;</p>
          <p> - Server side: NodeJS, Firebase, Third party APIs;</p>
          <p>3. Deployment & Maintenance;</p>
        </div>
      </section>

      {/* My Work section*/}

      <section className={styles.sectionMySkills}>My Work</section>

      {/* My Contacts section*/}

      <section className={styles.sectionContacts} id="contacts">
        <Form />
      </section>

      {/* My Blog section*/}
      <section className={styles.sectionMySkills} id="blog">
        My Blog
      </section>

      {/* Footer*/}
      <footer className={styles.footer}>All Rights Reserved &copy; 2022</footer>
    </div>
  )
}
