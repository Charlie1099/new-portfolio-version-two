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
        I am excited to make a career in the tech field. This is a new adventure for me, 
        but one that I have always been interested in and have an aptitude for.
        </p>
        <p>
        I am ready to start my career in the tech industry and I know that this is where I belong.
         I have completed a Full Stack Bootcamp from the University of Utah Bootcamp where I developed
          skills in a variety of developer tools including JavaScript, Node.js, SQL, Express.js, MVC, OOP, and PWA.
        </p>
        <p>
        I loved the challenge of learning so much during this course and was able to develop my learning of MERN stack. 
        As I continue to develop I look forward to learning more as my journey on this exciting career path has just started.
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
