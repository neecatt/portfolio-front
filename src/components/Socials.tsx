import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const Socials = () => (
  <nav className="socials" aria-label="Social links">
    <a className="social-linkedin" href="https://www.linkedin.com/in/nijatabdullazada/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin color="white" size={30} /></a>
    <a className="social-github" href="https://www.github.com/neecatt/" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub color="white" size={30} /></a>
    <a className="social-instagram" href="https://www.instagram.com/nee.catt/" target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram color="white" size={30} /></a>
  </nav>
);

export default Socials;
