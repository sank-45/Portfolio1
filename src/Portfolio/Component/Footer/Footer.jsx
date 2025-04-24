import './Footer.scss';
import Logo from "../../Component/Assets/favicon.png";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_container wrapper">
                {/* Logo and Tagline */}
                <div className="footer_logo">
                    <p>Building digital experiences that inspire.</p>
                </div>

                {/* Social Media Links */}
                <div className="footer_social">
                    <a href="https://www.linkedin.com/in/sankalp-patil-54041b300/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="social-icon" />
                    </a>
                    <a href="https://github.com/sank-45" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com/sank______45/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="social-icon" />
                    </a>
                    <a href="mailto:example@example.com">
                        <FaEnvelope className="social-icon" />
                    </a>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer_bottom">
                <p>&copy; {new Date().getFullYear()} Sankalp. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;