import axios from "axios";
import React, { useState } from "react";

export default function Login() {
  const [admin_contact, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");

  const submitHandle = async (e) => {
    e.preventDefault();
    //alert(role_id);
    try {
      const res = await axios.get("http://localhost:1122/kk/login", {
        params: {
          admin_contact: admin_contact,
          password: password,
        },
      });

      if (res.data > 0) {
        setError("");
        sessionStorage.setItem("user", res.data);
        window.location.reload();
      } else {
        setError("Invalid Contact or Password");
      }
    } catch (error) {}
  };

  return (
    <main class="main-content  mt-0">
      <section>
        <div class="page-header min-vh-75">
          <div class="container">
            <div class="row">
              <div class="col-xl-4 col-lg-5 col-md-6 d-flex flex-column mx-auto">
                <div class="card card-plain mt-8">
                  <div class="card-header pb-0 text-left bg-transparent">
                    <h3 class="font-weight-bolder text-info text-gradient">
                      Welcome back ADMIN
                    </h3>
                    <p class="mb-0">Enter your email and password to sign in</p>
                  </div>
                  <div class="card-body">
                    <form role="form">
                      <label>Contact</label>
                      <div class="mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Contact"
                          aria-label="Contact"
                          aria-describedby="contact-addon"
                          onChange={(e) => setphone(e.target.value)}
                        />
                      </div>
                      <label>Password</label>
                      <div class="mb-3">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Password"
                          aria-label="Password"
                          aria-describedby="password-addon"
                          onChange={(e) => setpassword(e.target.value)}
                        />
                      </div>

                      <div class="text-center">
                        <button
                          type="button"
                          class="btn bg-gradient-info w-100 mt-4 mb-0"
                          onClick={submitHandle}
                        >
                          Sign in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="oblique position-absolute top-0 h-100 d-md-block d-none me-n8">
                  <div
                    class="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
                    style={{
                      backgroundImage:
                        "url('../assets/img/curved-images/curved6.jpg')",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
