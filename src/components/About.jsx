import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/_about.scss'

const About = () => {
    return (
        <div className="about-container">
            <h2>Designed and Developed by:</h2>
            <h1>Vipin Kumar Maurya</h1>
            <div>
                <a href="https://github.com/kvipinm" target='_blank' rel="noreferrer" className="about-icons">
                    <FaGithub size={70} />
                </a>
                <a href="https://www.linkedin.com/in/vipinkrmaurya/" target='_blank' rel="noreferrer" className="about-icons">
                    <FaLinkedin size={70} />
                </a>
            </div>
        </div>
    )
}
export default About;