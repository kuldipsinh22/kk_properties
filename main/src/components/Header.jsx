import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [user_name, setuser_name] = useState("");
  const [img, setimg] = useState("");
  const [auth, setAuth] = useState(sessionStorage.getItem("user"));

  useEffect(() => {
    console.log(auth);
    if (auth) {
      getProperty();
    }
  }, []);

  const getProperty = async () => {
    const url = "http://localhost:1122/kk/user/" + auth;
    console.log(url);
    const res = await axios.get(url);
    console.log(res.data);
    setuser_name(res.data.user_name);
    setimg(res.data.img);
  };
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
            <img src={`http://localhost:1122/uploads/${img}`} alt="" />

            <div className="number">
              <Link to={"/Profile/" + auth}>{user_name}</Link>
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
