import React from "react";

export default function Login() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#f0f0f0",
          padding: "30px",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2 style={{ color: "#333" }}>Sign In</h2>
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            border: "1px solid #ccc",
            margin: "0 auto",
            width: "300px",
          }}
        >
          <form>
            <div style={{ marginBottom: "10px" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  color: "#333",
                  fontSize: "14px",
                  marginBottom: "5px",
                }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                style={{
                  width: "100%",
                  padding: "5px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label
                htmlFor="password"
                style={{
                  display: "block",
                  color: "#333",
                  fontSize: "14px",
                  marginBottom: "5px",
                }}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                style={{
                  width: "100%",
                  padding: "5px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input
                type="checkbox"
                id="agree"
                name="agree"
                value="agree"
                style={{ marginRight: "5px" }}
              />
              <label
                htmlFor="agree"
                style={{ color: "#333", fontSize: "14px" }}
              >
                I agree the Terms and Conditions
              </label>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <input
                type="submit"
                value="SIGN IN"
                style={{
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#007bff", fontSize: "14px" }}>
                Forgot Password?
              </a>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#007bff", fontSize: "14px" }}>
                Create account
              </a>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#007bff", fontSize: "14px" }}>
                Sign In with Google
              </a>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <a href="#" style={{ color: "#007bff", fontSize: "14px" }}>
                Sign In with Twitter
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
