import "./Footer.scss";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="footer__item">
          <a href="/" className="logo">
            <img src="" alt="logo" />
          </a>
        </div>
      </div>
      <div className="row">
        <div className="footer__item">
          <a href="/" className="logo">
            <img src="" alt="logo" />
          </a>
        </div>
        <div className="footer__item">
          <a href="/" className="home">
            Home
          </a>
        </div>
        <div className="footer__item">
          <a href="/" className="gallery">
            Gallery
          </a>
        </div>
        <div className="footer__item">
          <a href="/" className="contacts">
            Contacts
          </a>
        </div>
      </div>
      <div className="row">
        <div className="footer__item ">
          <a href="/" className="icon">
            <FaFacebook />
          </a>
        </div>
        <div className="footer__item">
          <a href="/" className="linkedin">
            <FaLinkedin />
          </a>
        </div>
        <div className="footer__item">
          <a href="/" className="github">
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
