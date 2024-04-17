import React from "react";

export default function Profile() {
  return (
    <div>
      <section
        className="breadcumb-area bg-img"
        style={{ backgroundImage: "url(img/bg-img/hero1.jpg)" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="breadcumb-content">
                <h3 className="breadcumb-title">Listings</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{ marginTop: "50px", fontSize: "30px" }}>Jay Hind</div>
    </div>
  );
}
