import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="header__item">
        <a href="/" className="logo">
          <img src="" alt="logo" />
        </a>
      </div>
      <div className="header__item">
        <a href="/" className="home">
          Home
        </a>
      </div>
      <div className="header__item">
        <a href="/" className="gallery">
          Gallery
        </a>
      </div>
      <div className="header__item">
        <a href="/" className="about">
          Contacts
        </a>
      </div>
    </header>
  );
};

export default Header;
