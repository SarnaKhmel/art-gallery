import "./Footer.scss";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="justify-content-center">
          <Col md={12}>
            <div className="footer-links">
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
                  About
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="footer-content">
          <Col md={6}>
            <div className="footer-copyright">
              <p className="block__content--copyright">
                Copyright © 2024 Oleksa Sarnatskyi
              </p>
              <p className="block__content--privacy-policy">
                <Link href="/politics">Privacy Policy</Link>
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div className="social-block">
              <div className="social-item">
                <Link href="/" className="icon">
                  <FaFacebook size={24} />
                </Link>
              </div>
              <div className="social-item">
                <Link href="/" className="linkedin">
                  <FaLinkedin size={24} />
                </Link>
              </div>
              <div className="social-item">
                <Link href="/" className="github">
                  <FaGithub size={24} />
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
