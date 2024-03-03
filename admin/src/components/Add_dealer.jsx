import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function Add_dealer() {
  const [acc_name, setacc_name] = useState("");
  const [full_name, setfull_name] = useState("");
  const [img, setimg] = useState("");
  const [contact, setcontact] = useState("");
  const [dealer_email, setdealer_email] = useState("");
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
      getDealer();
    }
  }, []);

  const getDealer = async () => {
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
  };

  const submitbtn = async (e) => {
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
      res = await axios.put("http://localhost:1122/kk/dealer/" + id, formData);
    } else {
      res = await axios.post("http://localhost:1122/kk/dealer", formData);
    }
    console.log(res.data);
    alert(res.data);
    navigate("/Dealer");
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
                <label>Account Name</label>
                <div class="mb-3 col-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Account Name"
                    aria-label="Account Name"
                    aria-describedby="Name-addon"
                    defaultValue={acc_name}
                    onChange={(e) => setacc_name(e.target.value)}
                  />
                </div>
                <label>Account Name</label>
                <div class="mb-3 col-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your full name"
                    aria-label="Your full name"
                    aria-describedby="Name-addon"
                    defaultValue={full_name}
                    onChange={(e) => setfull_name(e.target.value)}
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
                    defaultValue={dealer_email}
                    onChange={(e) => setdealer_email(e.target.value)}
                  />
                </div>

                <label>City</label>
                <div class="mb-3 col-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="city"
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
                    aria-describedby="State-addon"
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
