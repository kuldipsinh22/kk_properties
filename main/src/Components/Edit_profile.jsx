import { useEffect, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export default function Edit_profile() {
  const [user_name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [user_email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [img, setimg] = useState("");
  const navigate = useNavigate();
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
    setEmail(res.data.user_email);
    setContact(res.data.contact);
    setPassword(res.data.password);
  };
  const submitbtn = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user_name", user_name);
    formData.append("img", img);
    formData.append("contact", contact);
    formData.append("user_email", user_email);
    formData.append("password", password);
    let res = "";
    console.log(formData);

    res = await axios.put("http://localhost:1122/kk/user/" + id, formData);

    console.log(res.data);
    alert(res.data);
    navigate("/Profile");
  };
  return (
    <>
      {/* <!-- ======= Breadcrumbs ======= --> */}
      <div
        class="breadcrumbs d-flex align-items-center"
        style={{ backgroundImage: "url('assets/img/breadcrumbs-bg.jpg')" }}
      >
        <div
          class="container position-relative d-flex flex-column align-items-center"
          data-aos="fade"
        >
          <h2>Profile</h2>
          <ol>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>Profile</li>
          </ol>
        </div>
      </div>
      <div class="body">
        <div class="container bootstrap snippets bootdey">
          <div class="row">
            <div class="profile-nav col-md-3" style={{ marginBottom: "30px" }}>
              <div class="panel">
                <div class="user-heading round">
                  <a href="/">
                    <img
                      src={`http://localhost:1122/uploads/${img}`}
                      alt="User Profile"
                    />
                  </a>
                  <h1>{user_name}</h1>
                  <p>{user_email}</p>
                </div>
              </div>
            </div>
            <div class="profile-info col-md-9">
              <div class="panel"></div>
              <div class="panel">
                <div class="panel-body bio-graph-info">
                  <h1>User Profile</h1>
                  {/* <div class="row">
                    <div class="bio-row">
                      <p>
                        <span>Name </span>: {user_name}
                      </p>
                    </div>

                    <div class="bio-row">
                      <p>
                        <span>State </span>: Gujarat
                      </p>
                    </div>

                    <div class="bio-row">
                      <p>
                        <span>Occupation </span>: UI Designer
                      </p>
                    </div>
                    <div class="bio-row">
                      <p>
                        <span>Email </span>:{user_email}
                      </p>
                    </div>
                    <div class="bio-row">
                      <p>
                        <span>Mobile </span>: {contact}
                      </p>
                    </div>
                    

                    <button class="button-80" onClick={submitbtn}>
                      Submit
                    </button>
                  </div> */}
                  <form class="card-form">
                    <div class="input">
                      <input type="text" class="input-field" required />
                      <label
                        class="input-label"
                        defaultValue={user_name}
                        onChange={(e) => setName(e.target.value)}
                      >
                        Name
                      </label>
                    </div>
                    <div class="input">
                      <input type="text" class="input-field" required />
                      <label
                        class="input-label"
                        defaultValue={user_email}
                        onChange={(e) => setEmail(e.target.value)}
                      >
                        Email
                      </label>
                    </div>
                    <div class="input">
                      <input type="text" class="input-field" required />
                      <label
                        class="input-label"
                        defaultValue={contact}
                        onChange={(e) => setContact(e.target.value)}
                      >
                        Contact
                      </label>
                    </div>
                    <div class="input">
                      <input type="password" class="input-field" required />
                      <label
                        class="input-label"
                        defaultValue={password}
                        onChange={(e) => setPassword(e.target.value)}
                      >
                        Password
                      </label>
                    </div>
                    <div class="input">
                      <input type="file" class="input-field" required />
                      <label
                        class="input-label"
                        defaultValue={img}
                        onChange={(e) => setimg(e.target.files[0])}
                      >
                        Profile img
                      </label>
                    </div>
                    <div class="action">
                      <button
                        class="button-80"
                        style={{ marginBottom: "20px" }}
                        onClick={submitbtn}
                      >
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
