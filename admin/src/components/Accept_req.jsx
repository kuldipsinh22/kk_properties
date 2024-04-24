import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function Accept_req() {
  const [user_name, setuser_name] = useState("");
  const [img, setimg] = useState("");
  const [contact, setcontact] = useState("");
  const [user_email, setuser_email] = useState("");
  const [status, setstatus] = useState("");
  const [property_name, setproperty_name] = useState("");
  const [p_img, setp_img] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2]
    ? location.pathname.split("/")[2]
    : "";
  useEffect(() => {
    console.log(id);
    if (id) {
      getmeet();
    }
  }, []);

  const [auth, setAuth] = useState(sessionStorage.getItem("user"));
  const [role_id, setRole] = useState(sessionStorage.getItem("role"));
  const getmeet = async () => {
    const url = "http://localhost:1122/kk/singlemeet/" + id;
    console.log(url);
    const res = await axios.get(url);
    console.log(res.data);
    setuser_name(res.data.user_name);
    setcontact(res.data.contact);
    setuser_email(res.data.user_email);
    setimg(res.data.img);
    setproperty_name(res.data.property_name);
    setp_img(res.data.p_img);
  };
  const submitbtn = async (e) => {
    e.preventDefault();

    let res = "";
    const data = {
      status: 1,
    };
    res = await axios.put("http://localhost:1122/kk/accept/" + id, data);

    console.log(res.data);
    alert(res.data);
    navigate("/Meetingreq");
  };
  return (
    <div>
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
                  Meeting
                </h3>
                <p class="mb-0">Accept request here</p>
                <form>
                  <label>User Name</label>
                  <div class="mb-3 col-6">
                    <input type="text" class="form-control" Value={user_name} />
                  </div>
                  <label>Profile image</label>
                  <div class="mb-3 col-6">
                    <img
                      src={`http://localhost:1122/uploads/${img}`}
                      style={{
                        width: 200,
                        height: 200,
                        borderRadius: 5,
                        objectFit: "cover",
                      }}
                    ></img>
                  </div>
                  <label>Phone no.</label>
                  <div class="mb-3 col-6">
                    <input type="text" class="form-control" Value={contact} />
                  </div>
                  <label>Email</label>
                  <div class="mb-3 col-6">
                    <input
                      type="email"
                      class="form-control"
                      Value={user_email}
                    />
                  </div>

                  <label>Property Name</label>
                  <div class="mb-3 col-6">
                    <input
                      type="email"
                      class="form-control"
                      Value={property_name}
                    />
                  </div>
                  <label>Property Image</label>
                  <div class="mb-3 col-6">
                    <img
                      src={`http://localhost:1122/uploads/${p_img}`}
                      style={{
                        width: 200,
                        height: 200,
                        borderRadius: 5,
                        objectFit: "cover",
                      }}
                    ></img>
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
    </div>
  );
}
