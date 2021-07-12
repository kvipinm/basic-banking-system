import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
    return (
        <div>
            <h2>Designed and Developed by</h2>
            <h1>Vipin Kumar Maurya</h1>
            <div className="about-icons">
                <a href="https://github.com/kvipinm" target='_blank' rel="noreferrer">
                    <FaGithub size={70} />
                </a>
                <a href="https://www.linkedin.com/in/vipinkrmaurya/" target='_blank' rel="noreferrer">
                    <FaLinkedin size={70} />
                </a>
            </div>
        </div>
    )
}
export default About;