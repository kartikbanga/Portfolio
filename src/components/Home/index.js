import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
// import Logo from './Logo'
import LogoS from '../../assets/images/lcl.png'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    ' ',
    'K',
    'a',
    'r',
    't',
    'i',
    'k',
    ' ',
    'B',
    'a',
    'n',
    'g',
    'a',
    ',',
  ]
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => {
      // Clear the timeout if the component unmounts before it fires
      clearTimeout(timeoutId)
    }
  })

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>

            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

            {/* <img src={LogoTitle} alt="developer" /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2> Problem Solver / Web Developer / Flutter Developer </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <a
            href="https://drive.google.com/file/d/1Q_X1UpiFOPHFtW-32HyKwEh_miqKagK_/view?usp=sharing"
            className="flat-button"
            target='_blank'
            rel="noopener noreferrer"
            download="Kartik's Resume.pdf"
          >
            DOWNLOAD CV
          </a>
        </div>
        {/* <Logo /> */}
        <img className="solid" src={LogoS} alt="kartik" />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
