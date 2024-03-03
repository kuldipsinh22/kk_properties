import React from "react";

export default function Rightside() {
  return (
    <div style={{ marginTop: "50px", marginRight: "500px" }}>
      {" "}
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="profile.jpg"
          alt="Profile Image"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            marginBottom: "10px",
          }}
        />
        <div style={{ marginBottom: "10px", fontWeight: "bold" }}>username</div>
        <button
          style={{
            background: "linear-gradient(135deg, #000000, #ffcc00)",
            color: "#ffffff",
            border: "none",
            padding: "5px 10px",
            borderRadius: "5px",
            cursor: "pointer",
            textTransform: "uppercase",
            fontSize: "12px",
            transition: "background-color 0.3s ease",
          }}
        >
          Visit Profile
        </button>
      </div>
    </div>
  );
}
