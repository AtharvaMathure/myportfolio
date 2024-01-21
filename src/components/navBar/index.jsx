// Update your Navbar component
import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import "./styles.scss";

const data = [
  {
    label: "HOME",
    to: "home", // Replace with the ID of the section you want to scroll to
  },
  {
    label: "ABOUT",
    to: "about",
  },
  {
    label: "SKILLS",
    to: "skills",
  },
  {
    label: "RESUME",
    to: "resume",
  },
  {
    label: "PORTFOLIO",
    to: "portfolio",
  },
  {
    label: "CONTACT",
    to: "contact",
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <a href="#home" className="navbar__container__logo">
            {/* Use the ID of the home section */}
            <FaReact size={30} />
          </a>
        </div>
        <ul
          className={`navbar__container__menu  ${toggleIcon ? "active" : ""}`}
        >
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <a
                href={`#${item.to}`}
                className="navbar__container__menu__item__links"
                onClick={handleToggleIcon}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
