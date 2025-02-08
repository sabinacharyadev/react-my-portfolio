import profileImage from "../assets/profile-image.png";

const AboutMe = () => {
  return (
    <>
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
              Sabin Acharya is a seasoned full-stack engineer with expertise in
              React and Node.js, spanning over a years in software development.
              Passionate about impactful web applications, he mentors junior
              developers with enthusiasm, finding it a rewarding investment of
              his time. Sabin&apos;s teaching extends to HTML and CSS basics,
              where he employs interactive methods like hands-on coding and
              PowerPoint slides. Recently, he&apos;s delved into CSS animations
              and integrating tools like Intro.js into React applications. With
              a knack for detail, Sabin refines his coding style with features
              like Flow for type checking, demonstrating a commitment to robust
              and efficient development practices.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
