import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  // Inline style objects
  const bodyStyle = {
    background: "rgb(99, 39, 120)",
  };
  const formControlFocusStyle = {
    boxShadow: "none",
    borderColor: "#BA68C8",
  };
  const profileButtonStyle = {
    background: "rgb(99, 39, 120)",
    boxShadow: "none",
    border: "none",
  };
  const profileButtonHoverFocusStyle = {
    background: "#682773",
    boxShadow: "none",
  };
  const labelsStyle = {
    fontSize: "11px",
  };
  const addExperienceHoverStyle = {
    background: "#BA68C8",
    color: "#fff",
    cursor: "pointer",
    border: "solauth 1px #BA68C8",
  };
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
  const auth = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";
  useEffect(() => {
    console.log(auth);
    if (auth) {
      getuser();
    }
  }, []);

  const getuser = async () => {
    const url = "http://localhost:1122/kk/user/" + auth;
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

    res = await axios.put("http://localhost:1122/kk/user/" + auth, formData);

    console.log(res.data);
    alert(res.data);
    navigate("/Users");
  };
  return (
    <div style={bodyStyle} className="container rounded bg-white mb-5">
      <h1 style={{ color: "Black", paddingTop: "180px", paddingLeft: "50px" }}>
        User Profile
      </h1>
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              wauthth="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              alt="Profile"
            />
            <span className="font-weight-bold">Edogaru</span>
            <span className="text-black-50">edogaru@mail.com.my</span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels" style={labelsStyle}>
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="first name"
                />
              </div>
              <div className="col-md-6">
                <label className="labels" style={labelsStyle}>
                  Surname
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="surname"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels" style={labelsStyle}>
                  Mobile Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter phone number"
                />
              </div>
              <div className="col-md-12">
                <label className="labels" style={labelsStyle}>
                  Address Line 1
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter address line 1"
                />
              </div>
              <div className="col-md-12">
                <label className="labels" style={labelsStyle}>
                  Address Line 2
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter address line 2"
                />
              </div>
              <div className="col-md-12">
                <label className="labels" style={labelsStyle}>
                  Postcode
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter postcode"
                />
              </div>
              <div className="col-md-12">
                <label className="labels" style={labelsStyle}>
                  State
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter state"
                />
              </div>
              <div className="col-md-12">
                <label className="labels" style={labelsStyle}>
                  Area
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter area"
                />
              </div>
              <div className="col-md-12">
                <label className="labels" style={labelsStyle}>
                  Email auth
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="enter email auth"
                />
              </div>
              <div className="col-md-12">
                <label className="labels" style={labelsStyle}>
                  Education
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="education"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label className="labels" style={labelsStyle}>
                  Country
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="country"
                />
              </div>
              <div className="col-md-6">
                <label className="labels" style={labelsStyle}>
                  State/Region
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="state/region"
                />
              </div>
            </div>
            <div className="mt-5 text-center">
              <button
                className="btn btn-primary profile-button"
                style={profileButtonStyle}
                type="button"
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center experience">
              <span>Edit Experience</span>
              <span
                className="border px-3 p-1 add-experience"
                style={addExperienceHoverStyle}
              >
                <i className="fa fa-plus"></i>&nbsp;Experience
              </span>
            </div>
            <br />
            <div className="col-md-12">
              <label className="labels" style={labelsStyle}>
                Experience in Designing
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="experience"
              />
            </div>
            <br />
            <div className="col-md-12">
              <label className="labels" style={labelsStyle}>
                Additional Details
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="additional details"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
