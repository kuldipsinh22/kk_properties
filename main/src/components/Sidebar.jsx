import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
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
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/Home">
                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="ni ni-tv-2 text-primary text-sm opacity-10"></i>
                </div>
                <span class="nav-link-text ms-1">Dashboard</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Users">
                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="ni ni-circle-08 text-warning text-sm opacity-10"></i>
                </div>
                <span class="nav-link-text ms-1">Users</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Dealer">
                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="ni ni-circle-08 text-warning text-sm opacity-10"></i>
                </div>
                <span class="nav-link-text ms-1">Dealers</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Property">
                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="ni ni-album-2 text-success text-sm opacity-10"></i>
                </div>
                <span class="nav-link-text ms-1">Property</span>
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="../pages/virtual-reality.html">
                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="ni ni-app text-info text-sm opacity-10"></i>
                </div>
                <span class="nav-link-text ms-1">Virtual Reality</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="../pages/rtl.html">
                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="ni ni-world-2 text-danger text-sm opacity-10"></i>
                </div>
                <span class="nav-link-text ms-1">RTL</span>
              </a>
            </li>
            <li class="nav-item mt-3">
              <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
                Account pages
              </h6>
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/Profile">
                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="ni ni-single-02 text-dark text-sm opacity-10"></i>
                </div>
                <span class="nav-link-text ms-1">Profile</span>
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="../pages/sign-in.html">
                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="ni ni-single-copy-04 text-warning text-sm opacity-10"></i>
                </div>
                <span class="nav-link-text ms-1">Sign In</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " href="../pages/sign-up.html">
                <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="ni ni-collection text-info text-sm opacity-10"></i>
                </div>
                <span class="nav-link-text ms-1">Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
