import React from "react";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <section className="hero-area">
        <div className="hero-slides owl-carousel owl-theme owl-loaded">
          <div className="owl-stage-outer">
            <div
              className="single-hero-slide bg-img"
              style={{ backgroundImage: "url(img/bg-img/hero1.jpg)" }}
            >
              <div className="container h-100">
                <div className="row h-100 align-items-center">
                  <div className="col-12">
                    <div className="hero-slides-content">
                      <h2 data-animation="fadeInUp" data-delay="100ms">
                        Find your home
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <>
        {/* ##### Featured Properties Area Start ##### */}
        <section className="featured-properties-area section-padding-100-50">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-heading wow fadeInUp">
                  <h2>Welcome to KK Properties</h2>
                  <p>
                    Welcome to KK Properties! We're thrilled to have you join
                    our trusted platform where finding your perfect property is
                    just a few clicks away. Whether you're buying your dream
                    home, seeking an ideal office space, or exploring investment
                    opportunities, KK Properties is here to guide you through
                    every step. Start your property journey with us today and
                    experience a seamless and secure way to achieve your real
                    estate goals. Thank you for choosing KK Properties – your
                    trusted partner in property search and acquisition!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ##### Featured Properties Area End ##### */}
        {/* ##### Call To Action Area Start ##### */}
        <section
          className="call-to-action-area bg-fixed bg-overlay-black"
          style={{ backgroundImage: "url(img/bg-img/cta.jpg)" }}
        >
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-12">
                <div className="cta-content text-center">
                  <h2 className="wow fadeInUp" data-wow-delay="300ms">
                    Are you looking for a place to rent?
                  </h2>
                  <h6 className="wow fadeInUp" data-wow-delay="400ms">
                    Suspendisse dictum enim sit amet libero malesuada feugiat.
                  </h6>
                  <a
                    href="#"
                    className="btn south-btn mt-50 wow fadeInUp"
                    data-wow-delay="500ms"
                  >
                    Search
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ##### Call To Action Area End ##### */}

        {/* ##### Editor Area Start ##### */}
        <section className="south-editor-area d-flex align-items-center">
          {/* Editor Content */}
          <div className="editor-content-area">
            {/* Section Heading */}
            <div
              className="section-heading wow fadeInUp"
              data-wow-delay="250ms"
            >
              <img src="img/icons/prize.png" alt="" />
              <h2>Kuldipsinh Gohil</h2>
              <p>Founder & CEO</p>
            </div>
            <p className="wow fadeInUp" data-wow-delay="500ms">
              Meet Kuldipsinh Gohil, the visionary founder of KK Properties. At
              just 21 years old, Kuldipsinh is not only a final year BCA student
              but also an innovative entrepreneur driven by a passion for
              revolutionizing the real estate market. His academic background in
              computer applications, combined with a keen interest in real
              estate, has led him to create KK Properties, a platform designed
              to simplify and secure the property buying and selling process.
              Kuldipsinh's youthful energy and fresh perspective are at the
              heart of KK Properties, embodying a commitment to provide a
              user-friendly and efficient service for real estate enthusiasts
              and professionals alike.
            </p>
            <div className="address wow fadeInUp" data-wow-delay="750ms">
              <h6>
                <img src="img/icons/phone-call.png" alt="" /> +91 6353220031
              </h6>
              <h6>
                <img src="img/icons/envelope.png" alt="" />{" "}
                kuldipsinh0031@gmail.com
              </h6>
            </div>
            <div
              className="signature mt-50 wow fadeInUp"
              data-wow-delay="1000ms"
            >
              <img src="img/core-img/signature.png" alt="" />
            </div>
          </div>
          {/* Editor Thumbnail */}
          <div className="editor-thumbnail">
            <img src="img/icons/kk.jpeg" alt="" />
          </div>
        </section>
        {/* ##### Editor Area End ##### */}
      </>
    </>
  );
}
