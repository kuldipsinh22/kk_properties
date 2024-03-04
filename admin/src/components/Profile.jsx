import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./Footer";

export default function Profile() {
  const [admin_name, setadmin_name] = useState("");
  const [contact, setcontact] = useState("");
  const [admin_email, setadmin_email] = useState("");
  // const [admin_about, setadmin_about] = useState("");
  const [password, setpassword] = useState("");
  const [img, setimg] = useState("");

  const [id, setId] = useState(sessionStorage.getItem("user"));

  useEffect(() => {
    console.log(id);
    if (id) {
      getAdmin();
    }
  }, []);

  const getAdmin = async () => {
    const url = "http://localhost:1122/kk/admin/" + id;
    console.log(url);
    const res = await axios.get(url);
    console.log(res.data);
    setadmin_name(res.data.admin_name);
    setcontact(res.data.contact);
    setadmin_email(res.data.admin_email);
    // setadmin_about(res.data.admin_about);
    setpassword(res.data.password);
    setimg(res.data.img);
  };

  const submitbtn = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("admin_name", admin_name);
    formData.append("contact", contact);
    formData.append("admin_email", admin_email);
    // formData.append("admin_about", admin_about);
    formData.append("password", password);
    formData.append("img", "img");
    let res = "";
    if (id) {
      res = await axios.put("http://localhost:1122/kk/admin/" + id, formData);
    }
    alert(res.data);
    window.location.reload();
  };
  return (
    <div class="main-content position-relative max-height-vh-100 h-100">
      <div class="container-fluid py-4" style={{ marginTop: "210px" }}>
        <div class="row">
          <div class="col-md-8">
            <div class="card">
              <div class="card-header pb-0">
                <div class="d-flex align-items-center">
                  <p class="mb-0">Edit Profile</p>
                </div>
              </div>
              <div class="card-body">
                <p class="text-uppercase text-sm">Admin Information</p>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label
                        for="example-text-input"
                        class="form-control-label"
                      >
                        Name
                      </label>
                      <input
                        class="form-control"
                        type="text"
                        placeholder="Name"
                        defaultValue={admin_name}
                        onChange={(e) => setadmin_name(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label
                        for="example-text-input"
                        class="form-control-label"
                      >
                        Email address
                      </label>
                      <input
                        class="form-control"
                        type="email"
                        placeholder=""
                        defaultValue={admin_email}
                        onChange={(e) => setadmin_email(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label
                        for="example-text-input"
                        class="form-control-label"
                      >
                        Contact
                      </label>
                      <input
                        class="form-control"
                        type="text"
                        placeholder=""
                        defaultValue={contact}
                        onChange={(e) => setcontact(e.target.value)}
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label
                        for="example-text-input"
                        class="form-control-label"
                      >
                        Password
                      </label>
                      <input
                        class="form-control"
                        type="password"
                        placeholder=""
                        defaultValue={password}
                        onChange={(e) => setpassword(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <hr class="horizontal dark" />
                <button
                  class="btn btn-primary btn-sm ms-auto"
                  onClick={submitbtn}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
          {/* <div class="col-md-4">
            <div class="card card-profile">
              <img
                src="../assets/img/bg-profile.jpg"
                alt="Image placeholder"
                class="card-img-top"
              />
              <div class="row justify-content-center">
                <div class="col-4 col-lg-4 order-lg-2">
                  <div class="mt-n4 mt-lg-n6 mb-4 mb-lg-0">
                    <a href="javascript:;">
                      <img
                        src="../assets/img/team-2.jpg"
                        class="rounded-circle img-fluid border border-2 border-white"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div class="card-header text-center border-0 pt-0 pt-lg-2 pb-4 pb-lg-3">
                <div class="d-flex justify-content-between">
                  <a
                    href="javascript:;"
                    class="btn btn-sm btn-info mb-0 d-none d-lg-block"
                  >
                    Connect
                  </a>
                  <a
                    href="javascript:;"
                    class="btn btn-sm btn-info mb-0 d-block d-lg-none"
                  >
                    <i class="ni ni-collection"></i>
                  </a>
                  <a
                    href="javascript:;"
                    class="btn btn-sm btn-dark float-right mb-0 d-none d-lg-block"
                  >
                    Message
                  </a>
                  <a
                    href="javascript:;"
                    class="btn btn-sm btn-dark float-right mb-0 d-block d-lg-none"
                  >
                    <i class="ni ni-email-83"></i>
                  </a>
                </div>
              </div>
              <div class="card-body pt-0">
                <div class="row">
                  <div class="col">
                    <div class="d-flex justify-content-center">
                      <div class="d-grid text-center">
                        <span class="text-lg font-weight-bolder">22</span>
                        <span class="text-sm opacity-8">Friends</span>
                      </div>
                      <div class="d-grid text-center mx-4">
                        <span class="text-lg font-weight-bolder">10</span>
                        <span class="text-sm opacity-8">Photos</span>
                      </div>
                      <div class="d-grid text-center">
                        <span class="text-lg font-weight-bolder">89</span>
                        <span class="text-sm opacity-8">Comments</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center mt-4">
                  <h5>
                    Mark Davis<span class="font-weight-light">, 35</span>
                  </h5>
                  <div class="h6 font-weight-300">
                    <i class="ni location_pin mr-2"></i>Bucharest, Romania
                  </div>
                  <div class="h6 mt-4">
                    <i class="ni business_briefcase-24 mr-2"></i>Solution
                    Manager - Creative Tim Officer
                  </div>
                  <div>
                    <i class="ni education_hat mr-2"></i>University of Computer
                    Science
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <Footer />
      </div>
    </div>
  );
}
