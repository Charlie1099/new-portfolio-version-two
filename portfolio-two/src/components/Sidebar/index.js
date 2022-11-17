import './index.scss'
import { useState } from 'react'
import  Scroll from "react-scroll"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'

import { NavLink, Link, ScrollRestoration } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <nav className={showNav ? 'mobile-show' : ''}>
      <NavLink 
          exact="true"
          activeclassName="active"
          to="/"
          onClick={() => setShowNav(false) }>
          <FontAwesomeIcon icon={faHome} color="#ffd700" />
        </NavLink>
        <NavLink 
          activeclassName="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}>
          <FontAwesomeIcon icon={faUser} color="#ffd700" />
        </NavLink>
        <NavLink
          activeclassName="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#ffd700" />
        </NavLink>
        <NavLink
          activeclassName="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#ffd700" />
        </NavLink>
        <FontAwesomeIcon 
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#ffd700"
          size="3x"
          className='close-icon' />
      </nav>

      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/cameron-charlesworth-6b457b22a"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#ffd700" className="anchor-icon"/>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Charlie1099"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#ffd700" className="anchor-icon"/>
          </a>
        </li>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#ffd700"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  )
}

export default Sidebar
