import './index.scss'
import ss from '../../assets/images/cht.jpg'
import yt from '../../assets/images/yt.png'
import codepen from '../../assets/images/cp.png'
import { useState, useEffect } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
import { Link }  from 'react-router-dom'


const Project = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  //   const items = ['Item 1', 'Item 2', 'Item 3','item 4','item 5','Item 2', 'Item 3','item 4','item 5'];
  //   const [selectedItem, setSelectedItem] = useState(null);

  //   const popupRef = useRef(null);

  //   const handleItemClick = (index) => {
  //     setSelectedItem(index);
  //   };

  //   const handleScroll = () => {
  //     if (popupRef.current) {
  //       const itemWidth = popupRef.current.offsetWidth/items.length;
  //       const scrollLeft = popupRef.current.scrollLeft;
  //       const selectedIndex = Math.floor(scrollLeft / itemWidth);
  //       setSelectedItem(selectedIndex);
  //     }
  //   };

  return (
    <>
      <div className="container project-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <div className="proj">
            <div className="cnt">
              <div className="card">
                <img className="pss" src={ss} alt="genie" />
              </div>
              <div className="txt">
                <h2>
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['G','e', 'n', 'i', 'e', '-', 'A', 'I']}
                    idx={15}
                  />
                </h2>
                <p>Developed a captivating ChatGPT clone by ingeniously combining HTML, CSS, and JavaScript,<br/> with backend integration facilitated through Express.js.</p>
                <p> Utilized OpenAI's API to enable dynamic and engaging conversations. This project reflects a proficiency<br/> in both front-end and back-end techniques, resulting in an immersive and interactive AI-powered chat interface.</p>
                <Link to="https://github.com/kartikbanga/genie-ai" target='_blank' className="flat-button">
                   GITHUB
                </Link>
                <Link to="https://genie-ai-byuk.vercel.app/" target='_blank' className="flat-button">
                   LIVE
                </Link>
              </div>
            </div>

            <div className="cnt">
              <div className="card">
                <img
                  className="pss"
                  src={codepen}
                  alt="codepen"
                  loading="lazy"
                />
              </div>
              <div className="txt">
              <h2>
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C','o','d','e','P','e','n',' ','C','l','o','n','e']}
                    idx={15}
                  />
                </h2>
                <p>
                Developed an innovative CodePen Clone, a web-based code editor platform that empowers users to write,<br /> experiment, 
                and visualize HTML, CSS, and JavaScript code seamlessly.</p>
                <p> This project showcases my proficiency in frontend web development, local storage utilization, and user-centric<br /> design principles.
                </p>
                <Link to="https://github.com/kartikbanga/Code-Pen" target='_blank' className="flat-button">
                   GITHUB
                </Link>
                <Link to="https://code-pen-clone04.netlify.app/" target='_blank' className="flat-button">
                   LIVE
                </Link>
              </div>
            </div>
            <div className="cnt">
              <div className="card">
                <img className="pss" src={yt} alt="youtube" />
              </div>
              <div className="txt">
              <h2>
                  <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['Y','o','u','T','u','b','e', ' ','C','l','o','n','e']}
                    idx={15}
                  />
                </h2>
                <p>
                Developed a captivating YouTube Clone, utilizing cutting-edge technologies and modern design practices<br /> 
                to create an immersive user experience.Employed HTML5, CSS3, and JavaScript to craft the foundation,<br/> while leveraging the power of React for dynamic interactions. </p>
                <p>Enhanced the user interface with Material UI components, resulting in an aesthetically pleasing and responsive<br/> design. Integrated real-time data using Rapid API to provide users with up-to-date content, offering a seamless<br/>  browsing experience akin to the original platform.</p>
                <Link to="https://github.com/kartikbanga/youtube" target='_blank' className="flat-button">
                   GITHUB
                </Link>
                <Link to="https://youtube-clone04.netlify.app/" target='_blank' className="flat-button">
                   LIVE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Project
