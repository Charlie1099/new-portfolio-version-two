import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

import Loader from 'react-loaders'
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          Hi, i'm very excited to work in the tech filed its something that has
          all ways intrested me. I am aiming to start my jurney in a Junior role
          with a company that will help me grow to become the best developer that I can become.
        </p>
        <p>
          I have recently completed a Full Stack Bootcamp from the University of
          Utah Bootcamp where I developed skills in a variety of developer tools
          including JavaScript, Node.js, SQL, Express.js, MVC, OOR, and PWA.
        </p>
        <p>
          I loved the challenge of learning so much over the six months that I
          was at the course learing the MERN stack. I look forward to learing
          more as my journey on this exciting creer path has just started.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </div>
  )
}

export default About
