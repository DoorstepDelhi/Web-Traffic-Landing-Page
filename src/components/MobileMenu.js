import React, { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import CloseBtn from "../assets/images/shapes/close-1-1.png";

const MobileMenu = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const mobileMenu = () => {
    document
      .querySelector(".side-menu__toggler")
      .addEventListener("click", function (e) {
        document.querySelector(".side-menu__block").classList.toggle("active");
        e.preventDefault();
      });

    //Close Mobile Menu
    let sideMenuCloser = document.querySelectorAll(
      ".side-menu__close-btn, .side-menu__block-overlay"
    );

    sideMenuCloser.forEach((sideMenuCloserBtn) => {
      sideMenuCloserBtn.addEventListener("click", function (e) {
        document.querySelector(".side-menu__block").classList.remove("active");
        e.preventDefault();
      });
    });
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      mobileMenu();
      setHasMounted(true);
      return () => {
        mobileMenu();
      };
    }
  }, [hasMounted]);

  if (!hasMounted) {
    return null;
  }

  return (
    <div className="side-menu__block">
      <div className="side-menu__block-overlay custom-cursor__overlay">
        <div className="cursor"></div>
        <div className="cursor-follower"></div>
      </div>
      <div className="side-menu__block-inner ">
        <div className="side-menu__top justify-content-end">
          <a href="#none" className="side-menu__toggler side-menu__close-btn">
            <img src={CloseBtn} alt="awesome post" />
          </a>
        </div>

        <nav className="mobile-nav__container">
          <NavLinks />
        </nav>
        <div className="side-menu__sep"></div>
        <div className="side-menu__content">
          <p>
            Lorem Ipsum is simply dummy text the printing and setting industry.
            Lorm Ipsum has been the industry's stanard dummy text ever.
          </p>
          <p>
            <a href="mailto:needhelp@apton.com">needhelp@apton.com</a> <br />
            <a href="tel:888-999-0000">888 999 0000</a>
          </p>
          <div className="side-menu__social">
            <a href="#none">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#none">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#none">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#none">
              <i className="fab fa-pinterest-p"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
