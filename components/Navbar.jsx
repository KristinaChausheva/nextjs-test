import Link from "next/link"
const prefix = "/nextjs-test"

function Navbar() {
  return (
    <nav className="nav">
      <Link href="#">
        <img
          className="logo"
          src={`${prefix}/images/output.png`}
          width="150"
          height="120"
          alt=""
        />
      </Link>

      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="#skills">
          <a>My Tech Stack</a>
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
  )
}

export default Navbar
