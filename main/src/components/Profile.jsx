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
    border: "solid 1px #BA68C8",
  };
  const [user_name, setuser_name] = useState("");
  const [img, setimg] = useState("");
  const [contact, setcontact] = useState("");
  const [user_email, setuser_email] = useState("");
  const [password, setpassword] = useState("");
  const [status, setstatus] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [meeting, setMeeting] = useState([]);

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

  useEffect(() => {
    getProperty();
  }, []);
  const getProperty = async () => {
    const res = await axios.get("http://localhost:1122/kk/meeting/" + id);
    setMeeting(res.data);
    console.log(res.data);
    console.log(id);
  };
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

    res = await axios.put("http://localhost:1122/kk/user/" + id, formData);

    console.log(res.data);
    alert(res.data);
    navigate("/Profile/" + id);
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
              width="150px"
              src={`http://localhost:1122/uploads/${img}`}
              alt="Profile"
            />
            <span className="font-weight-bold">{user_name}</span>
            <span className="text-black-50">{user_email}</span>
          </div>
        </div>
        <div className="col-md-3 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-12">
                <div
                  style={{
                    marginBottom: 5,
                    color: "black",
                    marginTop: 10,
                  }}
                >
                  Your Name
                </div>
                <input
                  type="text"
                  style={{
                    width: "100%",
                    padding: 8,
                    borderRadius: 5,
                    border: "1px solid purple",
                    color: "#31124B",
                  }}
                  defaultValue={user_name}
                  onChange={(e) => setuser_name(e.target.value)}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <div
                  style={{
                    marginBottom: 5,
                    color: "black",
                    marginTop: 10,
                  }}
                >
                  Your contact
                </div>
                <input
                  type="text"
                  style={{
                    width: "100%",
                    padding: 8,
                    borderRadius: 5,
                    border: "1px solid purple",
                    color: "#31124B",
                  }}
                  defaultValue={contact}
                  onChange={(e) => setcontact(e.target.value)}
                />
              </div>
              <div className="col-md-12">
                <div
                  style={{
                    marginBottom: 5,
                    color: "black",
                    marginTop: 10,
                  }}
                >
                  Your Email
                </div>
                <input
                  type="email"
                  style={{
                    width: "100%",
                    padding: 8,
                    borderRadius: 5,
                    border: "1px solid purple",
                    color: "#31124B",
                  }}
                  defaultValue={user_email}
                  onChange={(e) => setuser_email(e.target.value)}
                />
              </div>
              <div className="col-md-12">
                <div
                  style={{
                    marginBottom: 5,
                    color: "black",
                    marginTop: 10,
                  }}
                >
                  Password
                </div>
                <input
                  type="password"
                  style={{
                    width: "100%",
                    padding: 8,
                    borderRadius: 5,
                    border: "1px solid purple",
                    color: "#31124B",
                  }}
                  defaultValue={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              <div className="col-md-12">
                <div
                  style={{
                    marginBottom: 5,
                    color: "black",
                    marginTop: 10,
                  }}
                >
                  Profile picture
                </div>
                <input
                  type="file"
                  style={{
                    width: "100%",
                    padding: 8,
                    borderRadius: 5,
                    border: "1px solid purple",
                    color: "#31124B",
                  }}
                  onChange={(e) => setimg(e.target.files[0])}
                />
              </div>

              <div className="col-md-12">
                <div
                  style={{
                    marginBottom: 5,
                    color: "black",
                    marginTop: 10,
                  }}
                >
                  City
                </div>
                <input
                  type="text"
                  style={{
                    width: "100%",
                    padding: 8,
                    borderRadius: 5,
                    border: "1px solid purple",
                    color: "#31124B",
                  }}
                  defaultValue={city}
                  onChange={(e) => setcity(e.target.value)}
                />
              </div>
              <div className="col-md-12">
                <div
                  style={{
                    marginBottom: 5,
                    color: "black",
                    marginTop: 10,
                  }}
                >
                  State
                </div>
                <input
                  type="text"
                  style={{
                    width: "100%",
                    padding: 8,
                    borderRadius: 5,
                    border: "1px solid purple",
                    color: "#31124B",
                  }}
                  defaultValue={state}
                  onChange={(e) => setstate(e.target.value)}
                />
              </div>
            </div>

            <div className="mt-5 text-center">
              <button
                className="btn btn-primary profile-button"
                style={profileButtonStyle}
                type="button"
                onClick={submitbtn}
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-3 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center experience">
              <h3>My pending requests</h3>
            </div>
            {meeting.map((meeting) => (
              <div
                style={{
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",

                  borderRadius: "10px",
                }}
              >
                <div style={{ marginTop: 10, marginLeft: 10 }}>
                  <p style={{ color: "grey" }}>
                    Meeting date - <br /> {meeting.meet_date}
                  </p>
                  <p style={{ color: "grey" }}>
                    Property name - {meeting.property_name}
                  </p>
                  <p style={{ color: "grey" }}>
                    Dealer name - {meeting.acc_name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-3">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center experience">
              <h3>My Accepted Meetings</h3>
            </div>
            {meeting.map((meeting) => (
              <div
                style={{
                  boxShadow:
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",

                  borderRadius: "10px",
                }}
              >
                <div style={{ marginTop: 10, marginLeft: 10 }}>
                  <p style={{ color: "grey" }}>
                    Meeting date - <br /> {meeting.meet_date}
                  </p>
                  <p style={{ color: "grey" }}>
                    Property name - {meeting.property_name}
                  </p>
                  <p style={{ color: "grey" }}>
                    Dealer name - {meeting.acc_name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
