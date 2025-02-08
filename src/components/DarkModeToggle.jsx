const DarkModeToggle = () => {
  return (
    <>
      <label className="dark-mode-toggle">
        <i className="fa-solid fa-circle-half-stroke"></i>
      </label>
      <input type="checkbox" id="dark-mode" />
    </>
  );
};

export default DarkModeToggle;
