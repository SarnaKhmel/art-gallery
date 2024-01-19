import { useState } from "react";
import logo from "../../assets/images/png/logoNoBG.png";
import "./Header.scss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <div className="header__logo">
        <a href="/home" className="logo">
          <img src={logo} alt="logo" className="logo__img" />
        </a>
      </div>
      <nav>
        <ul className={`main-menu ${isMenuOpen ? "show" : ""}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
        <button className="toggle-menu" onClick={toggleMenu}>
          &#9776; Menu
        </button>
      </nav>
    </header>
  );
};

export default Header;
