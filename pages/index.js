import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"

const prefix = "/nextjs-test"

import Form from "../components/Form"

import firebaselogo from "../public/images/firebaselogo.png"
import Navbar from "../components/Navbar"
import Scroll from "../components/Scroll"
import CertCard from "../components/CertCard"
import CertSection from "../components/SertSection"

export default function Home() {
  const firebaselogo = require("../public/images/firebaselogo.png")
  console.log(firebaselogo.default.src)
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

      <Navbar />

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
        {/* <Scroll /> */}
      </section>

      {/* about section*/}

      <section className={styles.sectionAbout} id="about">
        <div className="greeting">
          <h1 className="loader">
            <span className="m">R</span>
            <span className="m">E</span>
            <span className="m">S</span>
            <span className="m">U</span>
            <span className="m">M</span>
            <span className="m">E</span>
          </h1>
          <div className={styles.steps}>
            <div>Education:</div>
            <div>
              &nbsp; - High School Diploma - High School of Mathematics and
              Informatics - Burgas, Bulgaria
            </div>
            <div>&nbsp; - BSc Natural Sciences - AU Plovdiv, Bulgaria</div>
            <div>
              &nbsp; - Profesional Education - SoftUni - Sofia, Bulgaria
            </div>
          </div>
        </div>
      </section>

      {/* My Skills section*/}

      <section className={styles.sectionMySkills} id="skills">
        <div className="greeting">
          <h1 className="loader">
            <span className="m">E</span>
            <span className="m">N</span>
            <span className="m">D</span>
            <span className="m">&nbsp;</span>
            <span className="m">T</span>
            <span className="m">O</span>
            <span className="m">&nbsp;</span>
            <span className="m">E</span>
            <span className="m">N</span>
            <span className="m">D</span>
            <span className="m">&nbsp;</span>
            <span className="m">S</span>
            <span className="m">O</span>
            <span className="m">L</span>
            <span className="m">U</span>
            <span className="m">T</span>
            <span className="m">I</span>
            <span className="m">O</span>
            <span className="m">N</span>
            <span className="m">S</span>
          </h1>
          <div className={styles.steps}>
            <div>1. Design & Prototyping With Figma;</div>
            <div>2. Implementation with :</div>
            <div> &nbsp; - Client side: ReactJS and NextJS;</div>
            <div> &nbsp; - State management with Redux;</div>
            <div>&nbsp; - Server side: NodeJS, Firebase, Third party APIs;</div>
            <div>3. Testing with Jest</div>
            <div>4. Deployment & Maintenance;</div>
          </div>
        </div>
        <div className={styles.logos}>
          <img
            src={`${prefix}/images/figmalogo.png`}
            width={100}
            height={100}
            className={styles.logo}
          />
          <img src={`${prefix}/images/react.png`} width={110} height={100} />
          <img
            src={`${prefix}/images/firebaselogo.png`}
            width={100}
            height={100}
          />

          <img
            src={`${prefix}/images/next_logo.png`}
            width={100}
            height={100}
          />
          <img src={`${prefix}/images/nodelogo.png`} width="100" height={100} />
        </div>
      </section>

      {/* My Work section*/}

      <section className={styles.sectionMySkills}>My Work</section>

      {/* My Contacts section*/}

      <section className={styles.sectionContacts} id="contacts">
        <Form />
      </section>

      {/* My Blog section*/}
      <section className={styles.sectionBlog} id="blog">
        <CertSection />
      </section>

      {/* Footer*/}
      <footer className={styles.footer}>All Rights Reserved &copy; 2022</footer>
    </div>
  )
}
