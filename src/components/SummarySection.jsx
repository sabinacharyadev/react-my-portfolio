const SummarySection = () => {
  return (
    <>
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
    </>
  );
};

export default SummarySection;
