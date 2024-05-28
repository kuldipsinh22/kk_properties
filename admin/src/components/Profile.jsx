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
  const [acc_name, setacc_name] = useState("");
  const [full_name, setfull_name] = useState("");
  // const [img, setimg] = useState("");
  // const [contact, setcontact] = useState("");
  const [dealer_email, setdealer_email] = useState("");
  // const [password, setpassword] = useState("");
  const [status, setstatus] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [id, setId] = useState(sessionStorage.getItem("user"));
  const [role_id, setRole] = useState(sessionStorage.getItem("role"));

  useEffect(() => {
    console.log(id);
    if (id) {
      getAdmin();
    }
  }, []);

  const getAdmin = async () => {
    if (role_id == 1) {
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
    }
    if (role_id == 2) {
      const url = "http://localhost:1122/kk/dealer/" + id;
      console.log(url);
      const res = await axios.get(url);
      console.log(res.data);
      setacc_name(res.data.acc_name);
      setcontact(res.data.contact);
      setdealer_email(res.data.dealer_email);
      setcity(res.data.city);
      setstate(res.data.state);
      setpassword(res.data.password);
      setimg(res.data.img);
      setstatus(res.data.status);
      setfull_name(res.data.full_name);
    }
  };
  const submitbtn = async (e) => {
    if (role_id == 1) {
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
    }
    if (role_id == 2) {
      e.preventDefault();
      const formData = new FormData();
      formData.append("acc_name", acc_name);
      formData.append("img", img);
      formData.append("contact", contact);
      formData.append("dealer_email", dealer_email);
      formData.append("city", city);
      formData.append("state", state);
      formData.append("password", password);
      formData.append("status", status);
      formData.append("full_name", full_name);
      let res = "";
      console.log(formData);

      if (id) {
        res = await axios.put(
          "http://localhost:1122/kk/dealer/" + id,
          formData
        );
      } else {
        res = await axios.post("http://localhost:1122/kk/dealer", formData);
      }
      console.log(res.data);
      alert(res.data);
      window.location.reload();
    }
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
              {role_id == 1 ? (
                <>
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
                </>
              ) : (
                <>
                  <div class="card-body">
                    <p class="text-uppercase text-sm">Dealer Information</p>
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
                            defaultValue={acc_name}
                            onChange={(e) => setacc_name(e.target.value)}
                          />
                        </div>
                      </div>
                      {/* full name */}
                      <div class="col-md-6">
                        <div class="form-group">
                          <label
                            for="example-text-input"
                            class="form-control-label"
                          >
                            Full name
                          </label>
                          <input
                            class="form-control"
                            type="text"
                            placeholder=""
                            defaultValue={full_name}
                            onChange={(e) => setfull_name(e.target.value)}
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
                            defaultValue={dealer_email}
                            onChange={(e) => setdealer_email(e.target.value)}
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

                      {/* city */}
                      <div class="col-md-6">
                        <div class="form-group">
                          <label
                            for="example-text-input"
                            class="form-control-label"
                          >
                            City
                          </label>
                          <input
                            class="form-control"
                            type="text"
                            placeholder=""
                            defaultValue={city}
                            onChange={(e) => setcity(e.target.value)}
                          />
                        </div>
                      </div>
                      {/* state */}
                      <div class="col-md-6">
                        <div class="form-group">
                          <label
                            for="example-text-input"
                            class="form-control-label"
                          >
                            State
                          </label>
                          <input
                            class="form-control"
                            type="text"
                            placeholder=""
                            defaultValue={state}
                            onChange={(e) => setstate(e.target.value)}
                          />
                        </div>
                      </div>

                      {/* img */}
                      <div class="col-md-6">
                        <div class="form-group">
                          <label
                            for="example-text-input"
                            class="form-control-label"
                          >
                            Your image
                          </label>
                          <input
                            class="form-control"
                            type="file"
                            placeholder=""
                            defaultValue={img}
                            onChange={(e) => setimg(e.target.files[0])}
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
                </>
              )}
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
