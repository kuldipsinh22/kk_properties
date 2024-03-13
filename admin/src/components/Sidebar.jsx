import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineProfile } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { RiAdminLine } from "react-icons/ri";
import { PiBuildings } from "react-icons/pi";
import { IoIosLogOut } from "react-icons/io";

export default function Sidebar() {
  const [auth, setAuth] = useState(sessionStorage.getItem("user"));
  const [role_id, setRole] = useState(sessionStorage.getItem("role"));
  const navigate = useNavigate();

  const menuitemsadmin = [
    {
      path: "/Home",
      name: "Home",
      icon: <IoHomeOutline size={20} color="#FB8340" />,
    },
    {
      path: "/Users",
      name: "Users",
      icon: <CiUser size={20} color="#FB8340" />,
    },
    {
      path: "/Dealer",
      name: "Dealers",
      icon: <RiAdminLine size={20} color="#FB8340" />,
    },
    {
      path: "/Property",
      name: "Properties",
      icon: <PiBuildings size={20} color="#FB8340" />,
    },
    {
      path: "/Profile",
      name: "Profile",
      icon: <AiOutlineProfile size={20} color="#FB8340" />,
    },
  ];

  const menuitemsDealer = [
    {
      path: "/Home",
      name: "Home",
      icon: <IoHomeOutline size={20} color="#FB8340" />,
    },

    {
      path: "/PropertyforDealer",
      name: "Properties",
      icon: <PiBuildings size={20} color="#FB8340" />,
    },
  ];
  const btnSignOut = () => {
    sessionStorage.clear();
    setAuth("");
    window.location.reload();
    navigate("/");
  };
  return (
    <>
      <div
        class="position-absolute w-100 min-height-300 top-0"
        style={{
          backgroundImage:
            "url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/profile-layout-header.jpg')",
          backgroundPositionY: "50%",
        }}
      >
        <span class="mask bg-primary opacity-6"></span>
      </div>
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
          <a
            class="navbar-brand m-0"
            href=" https://demos.creative-tim.com/argon-dashboard/pages/dashboard.html "
            target="_blank"
          >
            <img
              src="../assets/img/logo-ct-dark.png"
              class="navbar-brand-img h-100"
              alt="main_logo"
            />
            <span class="ms-1 font-weight-bold">Argon Dashboard 2</span>
          </a>
        </div>
        <hr class="horizontal dark mt-0" />
        {role_id == 1 ? (
          <>
            {/* Menu Items admin */}
            <div
              id="sidenav-collapse-main"
              style={{ marginLeft: "30px", marginRight: "30px" }}
            >
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {menuitemsadmin.map((item, index) => (
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
                      <div style={{ marginRight: "15px" }}>{item.icon}</div>
                      <span style={{ fontSize: "16px" }}>{item.name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : role_id == 2 ? (
          <>
            <div
              id="sidenav-collapse-main"
              style={{ marginLeft: "30px", marginRight: "30px" }}
            >
              <ul style={{ listStyleType: "none", padding: 0 }}>
                {menuitemsDealer.map((item, index) => (
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
                      <div style={{ marginRight: "15px" }}>{item.icon}</div>
                      <span style={{ fontSize: "16px" }}>{item.name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <></>
        )}

        <hr class="horizontal dark mt-0" />
        {/* Logout */}
        <div
          id="sidenav-collapse-main"
          style={{ marginLeft: "30px", marginRight: "30px" }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li onClick={btnSignOut}>
              <div
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
                <div style={{ marginRight: "15px" }}>
                  <IoIosLogOut />
                </div>
                <span style={{ fontSize: "16px" }}>Logout</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
