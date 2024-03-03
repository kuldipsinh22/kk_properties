import React, { useEffect } from "react";

import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Post() {
  const [properties, setProperties] = useState([]);
  let i = 1;
  useEffect(() => {
    getProperties();
  }, []);
  const getProperties = async () => {
    const res = await axios.get("http://localhost:1122/kk/property");
    setProperties(res.data);
    console.log(res.data);
  };

  const [id, setId] = useState(sessionStorage.getItem("user"));

  return (
    <div>
      <div
        class="breadcrumbs d-flex align-items-center"
        style={{ backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')" }}
      >
        <div
          class="container position-relative d-flex flex-column align-items-center"
          data-aos="fade"
        >
          <h2>Post Section</h2>
          <ol>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Post Section</li>
          </ol>
        </div>
      </div>
      <div class="container" style={{ display: "flex", width: "100%" }}>
        <div
          class="users-section"
          style={{ width: "30%", display: "flex", flexDirection: "column" }}
        >
          {/* <!-- User cards go here --> */}
          {properties.map((properties) => (
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                class="user-card"
                style={{
                  width: "200px",
                  padding: "10px",
                  border: "1px solid #e1e1e1",
                  borderRadius: "5px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={`http://localhost:1122/uploads/${properties.img}`}
                  alt="User's Profile Pic"
                  class="profile-pic"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    marginBottom: "10px",
                  }}
                />
                <span
                  class="username"
                  style={{ fontSize: "16px", fontWeight: "bold" }}
                >
                  @{properties.dealer_name}
                </span>
                <button
                  class="follow-button"
                  style={{
                    backgroundColor: "#0095f6",
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
                    e.target.style.backgroundColor = "#0077b5";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#0095f6";
                  }}
                >
                  Follow
                </button>
              </div>
            </div>
          ))}

          {/* <!-- Add more user cards as needed --> */}
        </div>
        <div
          class="separator"
          style={{
            width: "1px",
            backgroundColor: "#ccc",
            margin: "0 20px",
          }}
        ></div>
        <div class="posts-section" style={{ width: "70%" }}>
          {/* <!-- Post cards go here --> */}
          <div>
            {properties.map((properties) => (
              <div
                class="post-card"
                style={{
                  width: "600px",
                  padding: "10px",
                  border: "1px solid #e1e1e1",
                  borderRadius: "10px",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
              >
                <div
                  class="post-header"
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={`http://localhost:1122/uploads/${properties.img}`}
                    alt="User's Profile Pic"
                    class="profile-pic"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />
                  <span
                    class="username"
                    style={{ fontSize: "14px", fontWeight: "bold" }}
                  >
                    @{properties.dealer_name}
                  </span>
                </div>
                <img
                  src={`http://localhost:1122/uploads/${properties.p_img}`}
                  alt="Post Pic"
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    marginTop: "10px",
                  }}
                />
                <div class="post-description" style={{ padding: "10px 0" }}>
                  <p style={{ marginBottom: "10px" }}>
                    This is the description of the post. It can contain details
                    about the shared content.
                  </p>
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
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
