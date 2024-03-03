import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Profile() {
  const [img, setimg] = useState("");
  const [user_name, setName] = useState("");
  const [contact, setphone] = useState("");
  const [user_email, setEmail] = useState("");
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
    setName(res.data.user_name);
    setimg(res.data.img);
    setEmail(res.data.user_email);
    setphone(res.data.contact);
  };
  return (
    <>
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <div
        class="breadcrumbs d-flex align-items-center"
        style={{ backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')" }}
      >
        <div
          class="container position-relative d-flex flex-column align-items-center"
          data-aos="fade"
        >
          <h2>Profile</h2>
          <ol>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Profile</li>
          </ol>
        </div>
      </div>
      <div class="body">
        <div class="container bootstrap snippets bootdey">
          <div class="row">
            <div class="profile-nav col-md-3" style={{ marginBottom: "30px" }}>
              <div class="panel">
                <div class="user-heading round">
                  <a href="/">
                    <img
                      src={`http://localhost:1122/uploads/${img}`}
                      alt="User Profile"
                    />
                  </a>
                  <h1>{user_name}</h1>
                  <p>{user_email}</p>
                </div>
              </div>
            </div>
            <div class="profile-info col-md-9">
              <div class="panel"></div>
              <div class="panel">
                <div class="panel-body bio-graph-info">
                  <h1>User Profile</h1>
                  <div class="row">
                    <div class="bio-row">
                      <p>
                        <span>Name </span>: {user_name}
                      </p>
                    </div>

                    <div class="bio-row">
                      <p>
                        <span>State </span>: Gujarat
                      </p>
                    </div>

                    <div class="bio-row">
                      <p>
                        <span>Occupation </span>: UI Designer
                      </p>
                    </div>
                    <div class="bio-row">
                      <p>
                        <span>Email </span>:{user_email}
                      </p>
                    </div>
                    <div class="bio-row">
                      <p>
                        <span>Mobile </span>: {contact}
                      </p>
                    </div>
                    {/* <div class="bio-row">
                      <p>
                        <span>Phone </span>: 88 (02) 123456
                      </p>
                    </div> */}

                    <Link to="/Edit_profile">
                      <button
                        class="learn-more-button"
                        style={{
                          background:
                            "linear-gradient(90deg, #ffcc00 1%, #2d2d2d 99%)",
                          color: "white",
                          border: "none",
                          borderRadius: "5px",
                          padding: "8px 16px",
                          cursor: "pointer",
                          outline: "none",
                          fontWeight: "bold",
                          fontSize: "14px",
                          transition: "background-color 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background =
                            "linear-gradient(90deg, #ffcc00 1%, #595959 99%)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background =
                            "linear-gradient(90deg, #ffcc00 1%, #2d2d2d 99%)";
                        }}
                      >
                        Edit Profile
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
