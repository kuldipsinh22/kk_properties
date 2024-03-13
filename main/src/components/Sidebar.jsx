import React from "react";
import { NavLink } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineProfile } from "react-icons/ai";
import { CiUser } from "react-icons/ci";

export default function Sidebar() {
  const menuitems = [
    {
      path: "/Home",
      name: "Home",
      icon: <IoHomeOutline size={20} color="#FFE493" />,
    },
    {
      path: "/Explore",
      name: "Explore",
      icon: <CiUser size={20} color="#FFE493" />,
    },
    {
      path: "/Profile",
      name: "Profile",
      icon: <AiOutlineProfile size={20} color="#FFE493" />,
    },
  ];

  return (
    <div>
      <aside
        class="sidenav navbar navbar-vertical navbar-expand-xs border-0 fixed-start"
        // ms-4  my-3
        id="sidenav-main"
        style={{ backgroundColor: "black" }}
      >
        <div class="sidenav-header">
          <i
            class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
            aria-hidden="true"
            id="iconSidenav"
          ></i>
          <div class="navbar-brand m-0" target="_blank">
            <h4 class="font-weight-bold" style={{ color: "white" }}>
              <span style={{ color: "#FFE493" }}>KK</span> PROPERTIES
            </h4>
          </div>
        </div>
        <hr class="horizontal dark mt-0" />
        <div
          id="sidenav-collapse-main"
          style={{ marginLeft: "30px", marginRight: "30px" }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {menuitems.map((item, index) => (
              <li key={index} style={{ marginBottom: "10px" }}>
                <NavLink
                  to={item.path}
                  className="nav-link"
                  activeClassName="active"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "white",
                    padding: "10px",
                    borderRadius: "10px",
                    transition: "background-color 0.3s ease",
                  }}
                  activeStyle={{ backgroundColor: "#282F27" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#282F27")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  <div style={{ marginRight: "15px" }}>{item.icon}</div>
                  <span style={{ fontSize: "16px" }}>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
