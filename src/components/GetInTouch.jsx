const GetInTouch = () => {
  return (
    <>
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
              myemail@dentedcode.com <i className="fa-solid fa-paper-plane"></i>
            </button>
          </a>
        </div>
      </section>
    </>
  );
};

export default GetInTouch;
