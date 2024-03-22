import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-area">
      <div className="top-header-area">
        <div className="h-100 d-md-flex justify-content-between align-items-center">
          <div className="email-address">
            <a href="mailto:contact@southtemplate.com">
              contact@kkproperties.com
            </a>
          </div>
          <div className="phone-number d-flex">
            <div className="icon">
              <img src="img/icons/phone-call.png" alt="" />
            </div>
            <div className="number">
              <a href="tel:+45 677 8993000 223">+91 63532 20031</a>
            </div>
          </div>
        </div>
      </div>
      <div className="main-header-area" id="stickyHeader">
        <div className="classy-nav-container breakpoint-off">
          <nav className="classy-navbar justify-content-between" id="southNav">
            <a className="nav-brand" href="index.html">
              <img src="img/core-img/logo.png" alt="" />
            </a>
            <div className="classy-navbar-toggler">
              <span className="navbarToggler">
                <span />
                <span />
                <span />
              </span>
            </div>
            <div className="classy-menu">
              <div className="classycloseIcon">
                <div className="cross-wrap">
                  <span className="top" />
                  <span className="bottom" />
                </div>
              </div>
              <div className="classynav">
                <ul>
                  <li style={{ color: "#947054", transition: "color 0.3s" }}>
                    <Link to="/Home">Home</Link>
                  </li>
                  <li style={{ color: "#947054", transition: "color 0.3s" }}>
                    <Link to="/About">About Us</Link>
                  </li>
                  <li style={{ color: "#947054", transition: "color 0.3s" }}>
                    <Link to="/Properties">Properties</Link>
                  </li>
                  <li style={{ color: "#947054", transition: "color 0.3s" }}>
                    <Link to="/Blogs">Blogs</Link>
                  </li>
                  <li style={{ color: "#947054", transition: "color 0.3s" }}>
                    <Link to="/Contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
