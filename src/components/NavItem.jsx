/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const NavItem = ({ path, title }) => {
  return (
    <NavLink
      style={({ isActive }) => ({
        color: isActive ? "var(--primary-color)" : "white",
      })}
      className="zoom"
      to={path}
    >
      {title}
    </NavLink>
  );
};

export default NavItem;
