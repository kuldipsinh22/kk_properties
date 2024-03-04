import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getProperties();
  }, []);
  const getProperties = async () => {
    const res = await axios.get("http://localhost:1122/kk/property");
    setProperties(res.data);
    console.log(res.data);
  };

  return (
    <div style={{ marginTop: "50px" }}>
      {properties.map((properties) => (
        <div
          style={{
            maxWidth: "600px",
            margin: "20px auto",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px",
              backgroundColor: "#ffffff",
            }}
          >
            <img
              src={`http://localhost:1122/uploads/${properties.img}`}
              alt="ProfileImage"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                marginRight: "10px",
              }}
            />
            <div style={{ fontWeight: "bold" }}>@sigma</div>
          </div>
          <img
            src={`http://localhost:1122/uploads/${properties.p_img}`}
            alt="PostImage"
            style={{ width: "100%", height: "auto" }}
          />
          <div style={{ padding: "10px", color: "#666666", fontSize: "12px" }}>
            <div style={{ marginBottom: "5px" }}>
              Small description of the post goes here.
            </div>
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
              Learn More
            </button>
          </div>
        </div>
      ))}

      {/* <Rightside /> */}
    </div>
  );
}
