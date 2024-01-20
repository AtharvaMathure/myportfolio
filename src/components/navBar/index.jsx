import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";
import { HiX } from "react-icons/hi";
import "./styles.scss";

const data = [
  {
    label: "HOME",
    to: "home", // Specify the ID of the section you want to scroll to
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
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="navbar__container__logo"
          >
            <FaReact size={30} />
          </Link>
        </div>
        <ul
          className={`navbar__container__menu  ${toggleIcon ? "active" : ""}`}
        >
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
                spy={true}
                smooth={true}
                duration={500}
              >
                {item.label}
              </Link>
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
