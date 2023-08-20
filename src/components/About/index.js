import './index.scss'
import Overlay from '../Overlay'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faHtml5,
  faJs,
  faNode,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  // const edu="edu";
  // const sk="skills";
  // const int="inter";

  const [eduOverlayActive, setEduOverlayActive] = useState(false)
  const [linkOverlayActive, setLinkOverlayActive] = useState(false)
  const [skillsOverlayActive, setSkillsOverlayActive] = useState(false)
  const [intOverlayActive, setIntOverlayActive] = useState(false)

  const toggleEduOverlay = () => {
    setEduOverlayActive(!eduOverlayActive)
  }

  const toggleLinkOverlay = () => {
    setLinkOverlayActive(!linkOverlayActive)
  }

  const toggleSkillsOverlay = () => {
    setSkillsOverlayActive(!skillsOverlayActive)
  }

  const toggleIntOverlay = () => {
    setIntOverlayActive(!intOverlayActive)
  }

  return (
    <>
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
            I am pursuing a B.Tech(CSE) from Kurukshetra University, Kurukshetra
            with a 8.54 CGPA overall and no backlogs. I have covered my
            knowledge with the skills of DSA, HTML , CSS, JS , ReactJS, SQL,
            MongoDB, NodeJS, ExpressJS.
          </p>
          <p>
            C++ is a preferable language to me. Intermediate in problem solving
            and a good command over Data Structures and Algorithms. I am also
            confident in my cultural intelligence, problem-solving skillsets,
            and Business Intelligence skills as well.
          </p>
          <p>
            I am enthusiastic and always try to keep myself updated and would
            love to work in a team as an active team member.
          </p>
          <button className="flat-button" onClick={toggleEduOverlay}>
            EDUCATION
          </button>
          <Overlay
            active={eduOverlayActive}
            onClose={toggleEduOverlay}
            message="edu"
          />

          <button className="flat-button" onClick={toggleSkillsOverlay}>
            SKILLS
          </button>
          <Overlay
            active={skillsOverlayActive}
            onClose={toggleSkillsOverlay}
            message="skills"
          />

          <button className="flat-button" onClick={toggleLinkOverlay}>
            PROFILES
          </button>
          <Overlay
            active={linkOverlayActive}
            onClose={toggleLinkOverlay}
            message="link"
          />

          <button className="flat-button" onClick={toggleIntOverlay}>
            INTERSHIPS & CERTIFICATIONS
          </button>
          <Overlay
            active={intOverlayActive}
            onClose={toggleIntOverlay}
            message="int"
          />
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJs} color="#EFD81D" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faNode} color="#333" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faDatabase} color="#56A15D" />
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default About
