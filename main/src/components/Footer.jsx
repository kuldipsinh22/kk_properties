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
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="footer-widget-area mb-100">
                <div className="widget-title">
                  <h6>About Us</h6>
                </div>
                <img src="img/bg-img/footer.jpg" alt="" />
                <div className="footer-logo my-4">
                  <img src="img/core-img/logo.png" alt="" />
                </div>
                <p>
                  Integer nec bibendum lacus. Suspen disse dictum enim sit amet
                  libero males uada feugiat. Praesent malesuada.
                </p>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-3">
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
                    <img src="img/icons/phone-call.png" alt="" /> +45 677
                    8993000 223
                  </h6>
                  <h6>
                    <img src="img/icons/envelope.png" alt="" />
                    {"{"}" "{"}"}
                    office@template.com
                  </h6>
                  <h6>
                    <img src="img/icons/location.png" alt="" /> Main Str. no
                    45-46, b3, 56832, Los Angeles, CA
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="footer-widget-area mb-100">
                <div className="widget-title">
                  <h6>Useful Links</h6>
                </div>
                <ul className="useful-links-nav d-flex align-items-center">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Properties</a>
                  </li>
                  <li>
                    <a href="#">Listings</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                  <li>
                    <a href="#">Properties</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Elements</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="footer-widget-area mb-100">
                <div className="widget-title">
                  <h6>Featured Properties</h6>
                </div>
                <div className="featured-properties-slides owl-carousel">
                  <div className="single-featured-properties-slide">
                    <a href="#">
                      <img src="img/bg-img/fea-product.jpg" alt="" />
                    </a>
                  </div>
                  <div className="single-featured-properties-slide">
                    <a href="#">
                      <img src="img/bg-img/fea-product.jpg" alt="" />
                    </a>
                  </div>
                  <div className="single-featured-properties-slide">
                    <a href="#">
                      <img src="img/bg-img/fea-product.jpg" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copywrite-text d-flex align-items-center justify-content-center">
        <p>
          Copyright © All rights reserved | This template is made with{"{"}" "
          {"}"}
          <i className="fa fa-heart-o" aria-hidden="true" /> by{"{"}" "{"}"}
          <a href="https://colorlib.com" target="_blank">
            Colorlib
          </a>
        </p>
      </div>
    </footer>
  );
}
