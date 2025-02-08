const Header = () => {
  return (
    <>
      <header>
        {/* <!---Navbar--> */}
        <nav>
          <div className="flex-container navbar-container">
            <div className="flex-container">
              <div className="logo-name">Dented</div>
              <div className="line">|</div>
              <div>Soft. Engineer</div>
            </div>
            <ul className="flex-container nav-items">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            {/* <!---Hamburger Menu on Mobile--> */}
            <label for="hamburger-menu">
              <i className="fa-solid fa-bars"></i>
            </label>
            <input type="checkbox" id="hamburger-menu" />
            {/* <!---Side Menu--> */}
            <div className="side-menu">
              <ul className="flex-container side-menu-items">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
