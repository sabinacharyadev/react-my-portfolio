const Footer = () => {
  return (
    <>
      <footer>
        <div className="flex-container footer-container">
          <div>
            <h6>Links</h6>
            <ul>
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
          <div>
            <h6>Social Links</h6>
            <ul>
              <li>
                <a href="#">LinkedIn</a>
              </li>
              <li>
                <a href="#">Github</a>
              </li>
              <li>
                <a href="#">Youtube</a>
              </li>
              <li>
                <a href="#">Facebbok</a>
              </li>
              <li>
                <a href="#">X</a>
              </li>
            </ul>
          </div>
        </div>
        <center className="copy-right-text">
          &copy; Copy right all reserved. Made by Dented Code
        </center>
      </footer>
    </>
  );
};

export default Footer;
