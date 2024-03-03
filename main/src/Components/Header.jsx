import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Header() {
  const [img, setimg] = useState("");
  const [id, setId] = useState(sessionStorage.getItem("user"));

  useEffect(() => {
    console.log(id);
    if (id) {
      getuser();
    }
  }, []);
  const getuser = async () => {
    const url = "http://localhost:1122/kk/user/" + id;
    console.log(url);
    const res = await axios.get(url);
    console.log(res.data);

    setimg(res.data.img);
  };
  return (
    <header id="header" class="header d-flex align-items-center">
      <div class="container-fluid container-xl d-flex align-items-center justify-content-between">
        <Link to="/" class="logo d-flex align-items-center">
          <h1>
            <span>KK </span>Properties
          </h1>
        </Link>

        <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        <nav id="navbar" class="navbar">
          <ul>
            <li>
              <Link to="/Home" class="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Services">Services</Link>
            </li>
            <li>
              <Link to="/Projects">Projects</Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            {/* <li class="dropdown">
              <Link to="#">
                <span>Dropdown</span>{" "}
                <i class="bi bi-chevron-down dropdown-indicator"></i>
              </Link>
              <ul>
                <li>
                  <Link to="#">Dropdown 1</Link>
                </li>
                <li class="dropdown">
                  <Link to="#">
                    <span>Deep Dropdown</span>{" "}
                    <i class="bi bi-chevron-down dropdown-indicator"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link to="#">Deep Dropdown 1</Link>
                    </li>
                    <li>
                      <Link to="#">Deep Dropdown 2</Link>
                    </li>
                    <li>
                      <Link to="#">Deep Dropdown 3</Link>
                    </li>
                    <li>
                      <Link to="#">Deep Dropdown 4</Link>
                    </li>
                    <li>
                      <Link to="#">Deep Dropdown 5</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">Dropdown 2</Link>
                </li>
                <li>
                  <Link to="#">Dropdown 3</Link>
                </li>
                <li>
                  <Link to="#">Dropdown 4</Link>
                </li>
              </ul>
            </li> */}

            <li>
              <Link to="contact.html">Contact</Link>
            </li>
            <li>
              <Link to="/Profile" className="user-profile">
                <img
                  src={`http://localhost:1122/uploads/${img}`}
                  alt="User Profile"
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
