import React from "react";
import { NavLink } from "react-router-dom";
import { Contact2, Home, MapPinned } from "lucide-react";

export default function Sidebar() {
  const menuitems = [
    {
      path: "/Home",
      name: "Home",
      icon: <Home size={25} color="blue" />,
    },
    {
      path: "/Profile",
      name: "Profile",
      icon: <Contact2 size={25} color="blue" />,
    },
    {
      path: "/Explore",
      name: "Explore",
      icon: <MapPinned size={25} color="blue" />,
    },
  ];

  return (
    <div style={{ "@media (max-width: 1100px)": { display: "none" } }}>
      <aside
        class="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 fixed-start"
        // ms-4  my-3
        id="sidenav-main"
      >
        <div class="sidenav-header">
          <i
            class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
            aria-hidden="true"
            id="iconSidenav"
          ></i>
          <div class="navbar-brand m-0" target="_blank">
            <h4 class="font-weight-bold">KK PROPERTIES</h4>
          </div>
        </div>
        <hr class="horizontal dark mt-0" />
        <div id="sidenav-collapse-main">
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
                    color: "#000",
                    padding: "10px",
                    borderRadius: "10px",
                    transition: "background-color 0.3s ease",
                  }}
                  activeStyle={{ backgroundColor: "#e6e6e6" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#f0f0f0")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  <div style={{ marginRight: "10px" }}>{item.icon}</div>
                  <span style={{ fontSize: "14px" }}>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
