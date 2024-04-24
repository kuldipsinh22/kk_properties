import React from "react";

export default function Footer() {
  return (
    <footer
      className="footer-area section-padding-100-0 bg-img gradient-background-overlay"
      style={{ backgroundImage: "url(img/bg-img/cta.jpg)" }}
    >
      <div className="main-footer-area">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-xl-6">
              <div className="footer-widget-area mb-100">
                <div className="widget-title">
                  <h6>About Us</h6>
                </div>
                <img src="img/bg-img/footer.jpg" alt="" />
                <div className="footer-logo my-4">
                  <div
                    className="nav-brand"
                    to="/Home"
                    style={{
                      fontSize: "30px",
                      fontWeight: "bold",
                      fontFamily: "revert-layer",
                    }}
                  >
                    <span style={{ color: "#947054" }}>KK</span>{" "}
                    <span style={{ color: "white" }}>Properties</span>
                  </div>
                </div>
                <p>
                  Integer nec bibendum lacus. Suspen disse dictum enim sit amet
                  libero males uada feugiat. Praesent malesuada.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-6">
              <div className="footer-widget-area mb-100">
                <div className="widget-title">
                  <h6>Hours</h6>
                </div>
                <div className="weekly-office-hours">
                  <ul>
                    <li className="d-flex align-items-center justify-content-between">
                      <span>Monday - Friday</span> <span>09 AM - 19 PM</span>
                    </li>
                    <li className="d-flex align-items-center justify-content-between">
                      <span>Saturday</span> <span>09 AM - 14 PM</span>
                    </li>
                    <li className="d-flex align-items-center justify-content-between">
                      <span>Sunday</span> <span>Closed</span>
                    </li>
                  </ul>
                </div>
                <div className="address">
                  <h6>
                    <img src="img/icons/phone-call.png" alt="" /> +91 63532
                    20031
                  </h6>
                  <h6>
                    <img src="img/icons/envelope.png" alt="" />
                    contact@kkproperties.com
                  </h6>
                  <h6>
                    <img src="img/icons/location.png" alt="" /> Chitra GIDC
                    BHavnagar Gujarat
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copywrite-text d-flex align-items-center justify-content-center">
        <p>Copyright © All rights reserved | KK GOHIL</p>
      </div>
    </footer>
  );
}
