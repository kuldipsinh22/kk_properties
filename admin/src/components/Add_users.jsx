import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function Add_users() {
  const [user_name, setuser_name] = useState("");
  const [img, setimg] = useState("");
  const [contact, setcontact] = useState("");
  const [user_email, setuser_email] = useState("");
  const [password, setpassword] = useState("");
  const [status, setstatus] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";
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
    setuser_name(res.data.user_name);
    setcontact(res.data.contact);
    setuser_email(res.data.user_email);
    setpassword(res.data.password);
    setimg(res.data.img);
    setstatus(res.data.status);
    setcity(res.data.city);
    setstate(res.data.state);
  };

  const submitbtn = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user_name", user_name);
    formData.append("img", img);
    formData.append("contact", contact);
    formData.append("user_email", user_email);
    formData.append("password", password);
    formData.append("status", status);
    formData.append("city", city);
    formData.append("state", state);
    let res = "";
    console.log(formData);

    if (id) {
      res = await axios.put("http://localhost:1122/kk/user/" + id, formData);
    } else {
      res = await axios.post("http://localhost:1122/kk/user", formData);
    }
    console.log(res.data);
    alert(res.data);
    navigate("/Users");
  };
  return (
    <div
      style={{ marginTop: "50px", marginLeft: "260px", marginRight: "20px" }}
    >
      <div class="row">
        <div class="col-12">
          <div class="card mb-4">
            <div class="card-header pb-0">
              <h3
                style={{
                  background: "linear-gradient(to right, black, grey)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Add User
              </h3>
              <p class="mb-0">Add users here</p>
              <form>
                <label>User Name</label>
                <div class="mb-3 col-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Name"
                    aria-label="Name"
                    aria-describedby="Name-addon"
                    defaultValue={user_name}
                    onChange={(e) => setuser_name(e.target.value)}
                  />
                </div>
                <label>Profile image</label>
                <div class="mb-3 col-6">
                  <input
                    type="file"
                    class="form-control"
                    placeholder="Image"
                    defaultValue={img}
                    onChange={(e) => setimg(e.target.files[0])}
                  />
                </div>
                <label>Phone no.</label>
                <div class="mb-3 col-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Phone no."
                    aria-label="Phone no."
                    aria-describedby="Phone no.-addon"
                    defaultValue={contact}
                    onChange={(e) => setcontact(e.target.value)}
                  />
                </div>
                <label>Email</label>
                <div class="mb-3 col-6">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="email"
                    aria-label="email"
                    aria-describedby="email.-addon"
                    defaultValue={user_email}
                    onChange={(e) => setuser_email(e.target.value)}
                  />
                </div>
                <label>City</label>
                <div class="mb-3 col-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="City"
                    aria-label="city"
                    aria-describedby="city-addon"
                    defaultValue={city}
                    onChange={(e) => setcity(e.target.value)}
                  />
                </div>
                <label>State</label>
                <div class="mb-3 col-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="State"
                    aria-label="State"
                    aria-describedby="State.-addon"
                    defaultValue={state}
                    onChange={(e) => setstate(e.target.value)}
                  />
                </div>
                <label>Password</label>
                <div class="mb-3 col-6">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="password"
                    aria-label="password"
                    aria-describedby="password.-addon"
                    defaultValue={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
                <label>Status</label>
                <div class="mb-3 col-6">
                  <select
                    name="status"
                    class="form-control"
                    onChange={(e) => setstatus(e.target.value)}
                  >
                    <option>Choose</option>

                    <option value="0">Inactive</option>
                    <option value="1">Active</option>
                  </select>
                </div>
                <div
                  class="text-center"
                  style={{
                    marginBottom: "20px",
                    marginRight: "1000px",
                    marginLeft: "10px",
                  }}
                >
                  <button
                    type="button"
                    class="btn bg-gradient-info w-100 mt-4 mb-0"
                    onClick={submitbtn}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
