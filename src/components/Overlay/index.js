import React from 'react'
import './index.scss' // Import your CSS file for overlay styles
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'simplebar/dist/simplebar.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHackerrank } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

const Overlay = ({ active, onClose, message }) => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])
  console.log(message)

  return (
    <div className={`overlay ${active ? 'active' : 'closing'}`}>
      <div className="overlay-content">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        {message === 'edu' ? (
          <p className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['E', 'd', 'u', 'c', 'a', 't', 'i', 'o', 'n']}
                idx={15}
              />
            </h1>
            <p>
              B.Tech in Computer Science, <br />
              State Institute of Engineering and Technology, Kurukshetra
              University
              <h2>2019-2023 | GPA: 8.54 | Karnal, Haryana</h2>
            </p>
            <p>
              Sant Nischal Singh Public School
              <h2>XII | 2019 | 88.8% | Yamuna-Nagar, Haryana</h2>
            </p>
            <p>
              Sant Nischal Singh Public School
              <h2>X | 2017 | 95% | Yamuna-Nagar, Haryana</h2>
            </p>
          </p>
        ) : message === 'skills' ? (
          <p className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['S', 'k', 'i', 'l', 'l', 's']}
                idx={15}
              />
            </h1>
            <p>
              <h3>Programming </h3>
              Languages:
              <h2>
                • C++ <br />• OOPS <br />• HTML <br />• CSS <br />• JavaScript
              </h2>
              <br />
              Coursework:
              <h2>
                • Data Structures and Algorithms <br />• OOPS <br />• DBMS{' '}
                <br />
              </h2>
              <h3>Development:</h3>
              <h2>
                • React.js <br />• Redux <br />• Node.js <br />• Express.js{' '}
                <br />• MongoDB <br />• SQL
                <br />
              </h2>
              <br />
              <h3>Familiar:</h3>
              <h2>
                • Java <br />• Python <br />• Firebase <br />• Rest-API <br />•
                Postman
              </h2>
            </p>
          </p>
        ) : message === 'link' ? (
          <p className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={[
                  'C',
                  'o',
                  'd',
                  'i',
                  'n',
                  'g',
                  ' ',
                  'P',
                  'r',
                  'o',
                  'f',
                  'i',
                  'l',
                  'e',
                  's',
                ]}
                idx={15}
              />
            </h1>
            <p>
              <h2>
                GeeksForGeeks: <span />
                <Link
                  className="cert"
                  target="_blank"
                  to="https://auth.geeksforgeeks.org/user/returndisappointment/"
                >
                  LINK
                </Link>
              </h2>
              <h2>
                Code Studio: <span />
                <Link
                  className="cert"
                  target="_blank"
                  to="https://www.codingninjas.com/studio/profile/697c72a4-8f18-4bee-a984-d668fae3b37e"
                >
                  LINK
                </Link>
              </h2>
              <h2>
                LeetCode: <span/>
                <Link
                  className="cert"
                  target="_blank"
                  to="https://leetcode.com/_kartikbanga_/"
                >
                 LINK
                </Link>
              </h2>
            </p>
          </p>
        ) : (
          <p className="text-zone">
            {/* ANIMATED heading */}
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={[
                  'C',
                  'e',
                  'r',
                  't',
                  'i',
                  'f',
                  'i',
                  'c',
                  'a',
                  't',
                  'i',
                  'o',
                  'n',
                  's',
                ]}
                idx={15}
              />
            </h1>
            {/* CERTIFICATIONS */}
            <p>
              AWS Cloud Concepts
              <h2>
                LinkedIn Learning |{' '}
                <Link
                  className="cert"
                  target="_blank"
                  to="https://www.linkedin.com/learning/certificates/75100e706d16a654dd2d40016d210f18bbdff17712ff6cfbc070b4100cf2c085"
                >
                  LINK
                </Link>
              </h2>
            </p>
            <p>
              ReactJS Essential Training
              <h2>
                LinkedIn Learning |{' '}
                <Link
                  className="cert"
                  target="_blank"
                  to="https://drive.google.com/file/d/1N8MmPSvm4-25jU0w8jGZG32mr9Nj6dLl/view"
                >
                  LINK
                </Link>
              </h2>
            </p>
            <p>
              {' '}
              Data Structures & Algorithms
              <h2>
                Coding Ninjas |{' '}
                <Link
                  className="cert"
                  target="_blank"
                  to="https://certificate.codingninjas.com/verify/4563700df27f7f14"
                >
                  LINK
                </Link>
              </h2>
            </p>
            <br />
            {/* INTERNSHIP */}
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={[
                  'I',
                  'n',
                  't',
                  'e',
                  'r',
                  'n',
                  's',
                  'h',
                  'i',
                  'p',
                  's',
                ]}
                idx={15}
              />
            </h1>
            <p>
              Web Developer Intern
              <h2>CAL Info Training & Consultancy Pvt. Ltd.</h2>
            </p>
          </p>
        )}

        {/* Other content goes here */}
        {/* hey */}
      </div>
    </div>
  )
}

export default Overlay
