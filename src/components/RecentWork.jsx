import portfolioImage from "../assets/portfolio-image.png";

const RecentWork = () => {
  return (
    <>
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
    </>
  );
};

export default RecentWork;
