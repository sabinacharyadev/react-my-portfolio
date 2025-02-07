// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import profileImage from "./assets/profile-image.jpeg";
import portfolioImage from "./assets/portfolio-image.png";
import myResume from "./assets/myresume.pdf";
function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      {/* <!---DARK MODE TOGGLE----> */}
      <label className="dark-mode-toggle">
        <i className="fa-solid fa-circle-half-stroke"></i>
      </label>
      <input type="checkbox" id="dark-mode" />
      <div className="wrapper-container">
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
        {/* <!---HERO SECTION----> */}
        <section id="home">
          <div className="grid-container hero-section">
            <div className="intro-text">
              <p>
                Hi I am <b>Dented Code</b>
              </p>
              <p>
                <b>Software Engineer</b>
              </p>
              <br />
              <p>I love coding!</p>
              <a href={myResume} download>
                <button className="download-btn">
                  Download CV <i className="fa-solid fa-download"></i>
                </button>
              </a>
            </div>
            <div className="profile-image">
              <img src={profileImage} alt="profile-image" />
            </div>
          </div>
        </section>
        {/* <!--Summary Section---> */}
        <section>
          <div className="flex-container summary-container">
            <div className="flex-container">
              <i className="fa-solid fa-award"></i>
              <div>
                <span>IT</span>
                <p>Graduate</p>
              </div>
            </div>
            <div className="vertical-line">|</div>
            <div className="flex-container">
              <i className="fa-solid fa-laptop"></i>
              <div>
                <span>5+</span>
                <p>Projects</p>
              </div>
            </div>
            <div className="vertical-line">|</div>
            <div className="flex-container">
              <i className="fa-solid fa-briefcase"></i>
              <div>
                <span>1+</span>
                <p>Years</p>
              </div>
            </div>
          </div>
        </section>
        {/* <!--Skills Section--> */}
        <section id="skills">
          <center>
            <h2>Skills</h2>
          </center>
          <div className="flex-container skills-container">
            <div>
              <i className="fa-brands fa-html5"></i>
              <p>HTML</p>
            </div>
            <div>
              <i className="fa-brands fa-css3-alt"></i>
              <p>CSS</p>
            </div>
            <div>
              <i className="fa-brands fa-js"></i>
              <p>JS</p>
            </div>
            <div>
              <i className="fa-brands fa-square-github"></i>
              <p>Github</p>
            </div>
            <div>
              <i className="fa-brands fa-figma"></i>
              <p>Figma</p>
            </div>
          </div>
        </section>
        {/* <!-- My Recent Work Section --> */}
        <section id="projects">
          <center>
            <h2>My Recent Work</h2>
          </center>
          <div className="flex-container">
            {/* <!----Project 1------> */}
            <div className="project-card">
              <div className="card-image">
                <img src={portfolioImage} alt="project-image" />
              </div>
              <div className="card-icons">
                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <div className="card-text">
                <h4>Personal Portfolio</h4>
                <p>HTML | CSS</p>
              </div>
            </div>
            {/* <!----Project 2------> */}
            <div className="project-card">
              <div className="card-image">
                <img src={portfolioImage} alt="project-image" />
              </div>
              <div className="card-icons">
                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <div className="card-text">
                <h4>Personal Portfolio</h4>
                <p>HTML | CSS</p>
              </div>
            </div>
            {/* <!----Project 3------> */}
            <div className="project-card">
              <div className="card-image">
                <img src={portfolioImage} alt="project-image" />
              </div>
              <div className="card-icons">
                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <div className="card-text">
                <h4>Personal Portfolio</h4>
                <p>HTML | CSS</p>
              </div>
            </div>
            {/* <!----Project 4------> */}
            <div className="project-card">
              <div className="card-image">
                <img src={portfolioImage} alt="project-image" />
              </div>
              <div className="card-icons">
                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <div className="card-text">
                <h4>Personal Portfolio</h4>
                <p>HTML | CSS</p>
              </div>
            </div>
            {/* <!----Project 5------> */}
            <div className="project-card">
              <div className="card-image">
                <img src={portfolioImage} alt="project-image" />
              </div>
              <div className="card-icons">
                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <div className="card-text">
                <h4>Personal Portfolio</h4>
                <p>HTML | CSS</p>
              </div>
            </div>
            {/* <!----Project 6------> */}
            <div className="project-card">
              <div className="card-image">
                <img src={portfolioImage} alt="project-image" />
              </div>
              <div className="card-icons">
                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <div className="card-text">
                <h4>Personal Portfolio</h4>
                <p>HTML | CSS</p>
              </div>
            </div>
            {/* <!----Project 7------> */}
            <div className="project-card">
              <div className="card-image">
                <img src={portfolioImage} alt="project-image" />
              </div>
              <div className="card-icons">
                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-chrome"></i>
                </a>
              </div>
              <div className="card-text">
                <h4>Personal Portfolio</h4>
                <p>HTML | CSS</p>
              </div>
            </div>
          </div>
        </section>
        {/* <!----About Me Section-------> */}
        <section className="about-me-section" id="about">
          <center>
            <h2>About Me</h2>
          </center>
          <div className="flex-container about-me-container">
            <div>
              <img src={profileImage} alt="profile-image" />
            </div>
            <div className="bio-container">
              <h4>Dented Code</h4>
              <p>
                Sabin Acharya is a seasoned full-stack engineer with expertise
                in React and Node.js, spanning over a years in software
                development. Passionate about impactful web applications, he
                mentors junior developers with enthusiasm, finding it a
                rewarding investment of his time. Sabin&apos;s teaching extends
                to HTML and CSS basics, where he employs interactive methods
                like hands-on coding and PowerPoint slides. Recently, he&apos;s
                delved into CSS animations and integrating tools like Intro.js
                into React applications. With a knack for detail, Sabin refines
                his coding style with features like Flow for type checking,
                demonstrating a commitment to robust and efficient development
                practices.
              </p>
            </div>
          </div>
        </section>
        {/* <!---Get In Touch Section----> */}
        <section id="contact">
          <center>
            <h4>Get In Touch</h4>
          </center>
          <div className="flex-container get-in-touch-container">
            <a>
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a>
              <i className="fa-brands fa-github"></i>
            </a>
            <a>
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="tel:04161453369">
              <i className="fa-solid fa-mobile"></i>
            </a>
          </div>
          <center>
            <h5>OR</h5>
          </center>
          <div className="mail-container">
            <a href="mailto:myemail@dentedcode.com">
              <button className="download-btn">
                myemail@dentedcode.com{" "}
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </a>
          </div>
        </section>
        {/* <!--Footer--> */}
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
        {/* <!-- Go to top section --> */}
        <div className="go-to-top">
          <a href="#home">
            <i className="fa-solid fa-angle-up"></i>
          </a>
        </div>
      </div>
    </>
  );
}
export default App;
