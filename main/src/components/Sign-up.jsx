import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Signup() {
  const [user_name, setuser_name] = useState("");
  const [user_email, setuser_email] = useState("");
  const [contact, setcontact] = useState("");
  const [password, setpassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const errors = {};
    if (!user_name) {
      errors.user_name = "Name is required";
    }
    if (!user_email) {
      errors.user_email = "Email is required";
    }
    if (!contact) {
      errors.contact = "Contact is required";
    }
    if (!password) {
      errors.password = "Password is required";
    }
    return errors;
  };

  const submitbtn = async (e) => {
    e.preventDefault();
    setFormErrors(validate());

    if (user_name && user_email && contact && password) {
      const data = {
        user_name,
        user_email,
        contact,
        password,
      };

      let res = "";

      res = await axios.post("http://localhost:1122/kk/signup", data);

      alert(res.data);
      navigate("/");
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {/* Left side: Login form */}
        <div
          style={{
            width: "50%",
            padding: 20,
            marginLeft: 150,
            marginRight: 150,
            height: "100%",
          }}
        >
          {/* Login title */}
          <div
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginBottom: 20,
              marginTop: "10%",
              marginLeft: "35%",
              fontSize: 45,
              color: "black",
              marginBottom: 5,
            }}
          >
            Sign-Up
          </div>
          <div style={{ marginLeft: 190, marginBottom: 75 }}>
            <p>Enter your details for sign-up</p>
          </div>
          {/* name */}
          <div style={{ marginBottom: 15 }}>
            <div style={{ marginBottom: 5, color: "black" }}>Name</div>
            <input
              type="text"
              placeholder="Your Name"
              style={{
                width: "100%",
                padding: 8,
                borderRadius: 5,
                border: "1px solid gray",
              }}
              onChange={(e) => setuser_name(e.target.value)}
            />
            <p style={{ color: "red" }}>{formErrors.user_name}</p>
          </div>

          {/* Email */}
          <div style={{ marginBottom: 15 }}>
            <div style={{ marginBottom: 5, color: "black" }}>Email</div>
            <input
              type="email"
              placeholder="Your Email"
              style={{
                width: "100%",
                padding: 8,
                borderRadius: 5,
                border: "1px solid gray",
              }}
              onChange={(e) => setuser_email(e.target.value)}
            />
            <p style={{ color: "red" }}>{formErrors.user_email}</p>
          </div>
          {/* User contact field */}
          <div style={{ marginBottom: 15 }}>
            <div style={{ marginBottom: 5, color: "black" }}>Contact</div>
            <input
              type="text"
              placeholder="Your Contact"
              style={{
                width: "100%",
                padding: 8,
                borderRadius: 5,
                border: "1px solid gray",
              }}
              onChange={(e) => setcontact(e.target.value)}
            />
            <p style={{ color: "red" }}>{formErrors.contact}</p>
          </div>
          {/* Password field */}
          <div style={{ marginBottom: 15 }}>
            <div style={{ marginBottom: 5, color: "black", marginTop: 20 }}>
              Password
            </div>
            <input
              type="password"
              placeholder="Password"
              style={{
                width: "100%",
                padding: 8,
                borderRadius: 5,
                border: "1px solid grey",
              }}
              onChange={(e) => setpassword(e.target.value)}
            />
            <p style={{ color: "red" }}>{formErrors.password}</p>
          </div>
          {/* Login button */}
          <div>
            <button
              className="button-84"
              style={{
                width: "100%",
                marginTop: 20,
              }}
              onClick={submitbtn}
            >
              Sign-up
            </button>
          </div>
          <div style={{ marginTop: 20 }}>
            <Link to="/">
              <p>Already have an account?</p>
            </Link>
          </div>
        </div>
        {/* Right side: Image */}
        <div style={{ width: "50%", borderRadius: 10, marginLeft: 10 }}>
          <img
            src="https://wallpaperaccess.com/full/1350982.jpg"
            alt="Image"
            style={{
              width: "100%",
              height: "700px",
              borderRadius: 30,
              objectFit: "cover",
              padding: 20,
              borderColor: "white",
            }}
          />
        </div>
      </div>
    </div>
  );
}
