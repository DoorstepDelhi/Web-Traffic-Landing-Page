import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";

import LogoImage from "../assets/images/logo-1-1.png";

const HeaderHome = (props) => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 70) {
      setSticky(true);
    } else if (window.scrollY < 70) {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sticky]);

  return (
    <header
      className={`site-header-one stricky  ${props.extraClassName} ${
        sticky === true ? "stricky-fixed stricked-menu" : " "
      }`}
    >
      <div className="container-fluid">
        <div className="site-header-one__logo">
          <a href="/">
            <img src={LogoImage} width="129" alt="awesome post" />
          </a>
          <span className="side-menu__toggler">
            <i className="fa fa-bars"></i>
          </span>
        </div>
        <div className="main-nav__main-navigation">
          <NavLinks />
        </div>
        <div className="main-nav__right">
          <a href="#none" className={`thm-btn ${props.btnClass}`}>
            <span>Download App</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
