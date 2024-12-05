import { Link,NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logok.png'
import LogoSubtitle from '../../assets/images/Kartik.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faUser,faEnvelope, faLightbulb} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='sub' />
            
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/about" className="about-link">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/project" className="project-link">
                <FontAwesomeIcon icon={faLightbulb} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" to="/contact" className="contact-link">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/kartikbanga04/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>

            <li>
                <a target='_blank' rel='noreferrer' href='https://github.com/kartikbanga'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>

            {/* <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/kartikbanga04/'>
                    <FontAwesomeIcon icon={fa} color='#4d4d4e' />
                </a>
            </li> */}

            {/* <li>
                <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/kartikbanga04/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li> */}
            
        </ul>
    </div>
)

export default Sidebar