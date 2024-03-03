import React, { useEffect } from "react";

import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [img, setimg] = useState("");
  const [user_name, setName] = useState("");
  // const [contact, setphone] = useState("");
  // const [user_email, setEmail] = useState("");
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
    // setEmail(res.data.user_email);
    // setphone(res.data.contact);
  };
  return (
    <>
      <section id="hero" class="hero">
        <div class="info d-flex align-items-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6 text-center">
                <h2 data-aos="fade-down">
                  Welcome to <br />
                  <span>
                    <span style={{ color: "#FDB800" }}>KK </span>Properties
                  </span>
                </h2>
                <p data-aos="fade-up">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <a
                  data-aos="fade-up"
                  data-aos-delay="200"
                  href="#get-started"
                  class="btn-get-started"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          id="hero-carousel"
          class="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
        >
          <div
            class="carousel-item active"
            style={{
              backgroundImage:
                'url("assets/img/hero-carousel/hero-carousel-1.jpg")',
            }}
          ></div>
          <div
            class="carousel-item"
            style={{
              backgroundImage:
                'url("assets/img/hero-carousel/hero-carousel-2.jpg")',
            }}
          ></div>
          <div
            class="carousel-item"
            style={{
              backgroundImage:
                'url("assets/img/hero-carousel/hero-carousel-3.jpg")',
            }}
          ></div>
          <div
            class="carousel-item"
            style={{
              backgroundImage:
                'url("assets/img/hero-carousel/hero-carousel-4.jpg")',
            }}
          ></div>
          <div
            class="carousel-item"
            style={{
              backgroundImage:
                'url("assets/img/hero-carousel/hero-carousel-5.jpg")',
            }}
          ></div>

          <a
            class="carousel-control-prev"
            href="#hero-carousel"
            role="button"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon bi bi-chevron-left"
              aria-hidden="true"
            ></span>
          </a>

          <a
            class="carousel-control-next"
            href="#hero-carousel"
            role="button"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon bi bi-chevron-right"
              aria-hidden="true"
            ></span>
          </a>
        </div>
      </section>
      {/* usercard */}
      {/* <div
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
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
            src={`http://localhost:1122/uploads/${img}`}
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
            @{user_name}
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
      </div> */}
      {/* POst card */}
      {/* <div>
        <div
          class="post-card"
          style={{
            width: "600px",
            padding: "10px",
            border: "1px solid #e1e1e1",
            borderRadius: "10px",
            marginBottom: "20px",
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
              src={`http://localhost:1122/uploads/${img}`}
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
              @username
            </span>
          </div>
          <img
            src={`http://localhost:1122/uploads/${img}`}
            alt="Post Pic"
            style={{
              width: "100%",
              borderRadius: "10px",
              marginTop: "10px",
            }}
          />
          <div class="post-description" style={{ padding: "10px 0" }}>
            <p style={{ marginBottom: "10px" }}>
              This is the description of the post. It can contain details about
              the shared content.
            </p>
            <button
              class="learn-more-button"
              style={{
                background: "linear-gradient(90deg, #ffcc00 1%, #2d2d2d 99%)",
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
      </div> */}
      {/* <!-- ======= Constructions Section ======= --> */}
      <section id="constructions" class="constructions">
        <div class="container" data-aos="fade-up">
          <div class="section-header">
            <h2>Constructions</h2>
            <p>
              Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam
              porro nihil id ratione ea sunt quis dolorem dolore earum
            </p>
          </div>

          <div class="row gy-4">
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <div class="card-item">
                <div class="row">
                  <div class="col-xl-5">
                    <div
                      class="card-bg"
                      style={{
                        backgroundImage: "url(assets/img/constructions-1.jpg)",
                      }}
                    ></div>
                  </div>
                  <div class="col-xl-7 d-flex align-items-center">
                    <div class="card-body">
                      <h4 class="card-title">Eligendi omnis sunt veritatis.</h4>
                      <p>
                        Fuga in dolorum et iste et culpa. Commodi possimus
                        nesciunt modi voluptatem placeat deleniti adipisci. Cum
                        delectus doloribus non veritatis. Officia temporibus
                        illo magnam. Dolor eos et.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <div class="card-item">
                <div class="row">
                  <div class="col-xl-5">
                    <div
                      class="card-bg"
                      style={{
                        backgroundImage: "url(assets/img/constructions-2.jpg)",
                      }}
                    ></div>
                  </div>
                  <div class="col-xl-7 d-flex align-items-center">
                    <div class="card-body">
                      <h4 class="card-title">
                        Possimus ut sed velit assumenda
                      </h4>
                      <p>
                        Sunt deserunt maiores voluptatem autem est rerum
                        perferendis rerum blanditiis. Est laboriosam qui iste
                        numquam laboriosam voluptatem architecto. Est laudantium
                        sunt at quas aut hic. Eum dignissimos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="300">
              <div class="card-item">
                <div class="row">
                  <div class="col-xl-5">
                    <div
                      class="card-bg"
                      style={{
                        backgroundImage: "url(assets/img/constructions-3.jpg)",
                      }}
                    ></div>
                  </div>
                  <div class="col-xl-7 d-flex align-items-center">
                    <div class="card-body">
                      <h4 class="card-title">
                        Error beatae dolor inventore aut
                      </h4>
                      <p>
                        Dicta porro nobis. Velit cum in. Nesciunt dignissimos
                        enim molestiae facilis numquam quae quaerat ipsam omnis.
                        Neque debitis ipsum at architecto officia laboriosam
                        odit. Ut sunt temporibus nulla culpa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="400">
              <div class="card-item">
                <div class="row">
                  <div class="col-xl-5">
                    <div
                      class="card-bg"
                      style={{
                        backgroundImage: "url(assets/img/constructions-4.jpg)",
                      }}
                    ></div>
                  </div>
                  <div class="col-xl-7 d-flex align-items-center">
                    <div class="card-body">
                      <h4 class="card-title">
                        Expedita voluptas ut ut nesciunt
                      </h4>
                      <p>
                        Aut est quidem doloremque voluptatem magnam quis
                        excepturi vero quia. Eum eos doloremque architecto illo
                        at beatae dolore. Fugiat suscipit et sint ratione
                        dolores. Aut aliquid ea dolores libero nobis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ======= Features Section ======= --> */}
      <section id="features" class="features section-bg">
        <div class="container" data-aos="fade-up">
          <ul class="nav nav-tabs row  g-2 d-flex">
            <li class="nav-item col-3">
              <a
                class="nav-link active show"
                data-bs-toggle="tab"
                data-bs-target="#tab-1"
              >
                <h4>Modisit</h4>
              </a>
            </li>

            <li class="nav-item col-3">
              <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                <h4>Praesenti</h4>
              </a>
            </li>
            <li class="nav-item col-3">
              <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
                <h4>Explica</h4>
              </a>
            </li>

            <li class="nav-item col-3">
              <a class="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
                <h4>Nostrum</h4>
              </a>
            </li>
          </ul>

          <div class="tab-content">
            <div class="tab-pane active show" id="tab-1">
              <div class="row">
                <div
                  class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h3>Voluptatem dignissimos provident</h3>
                  <p class="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i class="bi bi-check2-all"></i> Ullamco laboris nisi ut
                      aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i> Duis aute irure dolor in
                      reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i> Ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate trideta storacalaperda mastiro
                      dolore eu fugiat nulla pariatur.
                    </li>
                  </ul>
                </div>
                <div
                  class="col-lg-6 order-1 order-lg-2 text-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <img
                    src="assets/img/features-1.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>

            <div class="tab-pane" id="tab-2">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Neque exercitationem debitis</h3>
                  <p class="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i class="bi bi-check2-all"></i> Ullamco laboris nisi ut
                      aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i> Duis aute irure dolor in
                      reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i> Provident mollitia neque
                      rerum asperiores dolores quos qui a. Ipsum neque dolor
                      voluptate nisi sed.
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i> Ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate trideta storacalaperda mastiro
                      dolore eu fugiat nulla pariatur.
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <img
                    src="assets/img/features-2.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>

            <div class="tab-pane" id="tab-3">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Voluptatibus commodi accusamu</h3>
                  <ul>
                    <li>
                      <i class="bi bi-check2-all"></i> Ullamco laboris nisi ut
                      aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i> Duis aute irure dolor in
                      reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i> Provident mollitia neque
                      rerum asperiores dolores quos qui a. Ipsum neque dolor
                      voluptate nisi sed.
                    </li>
                  </ul>
                  <p class="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <img
                    src="assets/img/features-3.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>

            <div class="tab-pane" id="tab-4">
              <div class="row">
                <div class="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                  <h3>Omnis fugiat ea explicabo sunt</h3>
                  <p class="fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <ul>
                    <li>
                      <i class="bi bi-check2-all"></i> Ullamco laboris nisi ut
                      aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i> Duis aute irure dolor in
                      reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i class="bi bi-check2-all"></i> Ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in
                      reprehenderit in voluptate trideta storacalaperda mastiro
                      dolore eu fugiat nulla pariatur.
                    </li>
                  </ul>
                </div>
                <div class="col-lg-6 order-1 order-lg-2 text-center">
                  <img
                    src="assets/img/features-4.jpg"
                    alt=""
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
