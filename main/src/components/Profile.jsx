import React, { useState } from "react";

export default function Profile() {
  const [username, setusername] = useState("");
  const [img, setimg] = useState("");
  const [contact, setcontact] = useState("");
  const [user_email, setuser_email] = useState("");
  const [password, setpassword] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");

  // const [id, setId] = useState(sessionStorage.getItem("user"));

  return (
    <div class="g-sidenav-show bg-gray-100 mt-5" style={{ height: "auto" }}>
      <div
        class="main-content position-relative max-height-vh-100 "
        style={{ marginLeft: "17%" }}
      >
        <div class="card shadow-lg mx-4 card-profile-top">
          <div class="card-body p-3">
            <div class="row gx-4">
              <div class="col-auto">
                <div class="avatar avatar-xl position-relative">
                  <img
                    src="../assets/img/team-1.jpg"
                    alt="profile_image"
                    class="w-100 border-radius-lg shadow-sm"
                  />
                </div>
              </div>
              <div class="col-auto my-auto">
                <div class="h-100">
                  <h5 class="mb-1">Sayo Kravits</h5>
                  <p class="mb-0 font-weight-bold text-sm">Public Relations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid py-4">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header pb-0">
                  <div class="d-flex align-items-center">
                    <p class="mb-0">Edit Profile</p>
                  </div>
                </div>
                <div class="card-body">
                  <p class="text-uppercase text-sm">User Information</p>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Username
                        </label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          First name
                        </label>
                        <input class="form-control" type="text" />
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
                        <input class="form-control" type="email" />
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
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                  <hr class="horizontal dark" />
                  <p class="text-uppercase text-sm">img Information</p>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          City
                        </label>
                        <input class="form-control" type="file" />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          City
                        </label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label
                          for="example-text-input"
                          class="form-control-label"
                        >
                          Country
                        </label>
                        <input class="form-control" type="text" />
                      </div>
                    </div>
                  </div>
                  <hr class="horizontal dark" />
                  <button class="btn btn-success btn-sm ms-auto">
                    Save changes
                  </button>
                  <button class="btn btn-danger btn-sm ms-5">
                    Delete account
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
