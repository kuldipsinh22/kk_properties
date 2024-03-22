import React from "react";

export default function About() {
  return (
    <>
      {/* ##### Breadcumb Area Start ##### */}
      <section
        className="breadcumb-area bg-img"
        style={{ backgroundImage: "url(img/bg-img/hero1.jpg)" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="breadcumb-content">
                <h3 className="breadcumb-title">About us</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ##### Breadcumb Area End ##### */}

      {/* ##### About Content Wrapper Start ##### */}
      <section className="about-content-wrapper section-padding-100">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div
                className="section-heading text-left wow fadeInUp"
                data-wow-delay="250ms"
              >
                <h2>We search for the perfect home</h2>
                <p>Suspendisse dictum enim sit amet libero</p>
              </div>
              <div className="about-content">
                <img
                  className="wow fadeInUp"
                  data-wow-delay="350ms"
                  src="img/bg-img/about.jpg"
                  alt=""
                />
                <p className="wow fadeInUp" data-wow-delay="450ms">
                  Integer nec bibendum lacus. Suspendisse dictum enim sit amet
                  libero malesuada. Integer nec bibendum lacus. Suspendisse
                  dictum enim sit amet libero malesuada feugiat. Praesent
                  malesuada congue magna at finibus. In hac habitasse platea
                  dictumst. Curabitur rhoncus auctor eleifend. Fusce venenatis
                  diam urna, eu pharetra arcu varius ac. Etiam cursus turpis
                  lectus, id iaculis risus tempor id. Phasellus fringilla nisl
                  sed sem scelerisque, eget aliquam magna vehicula.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div
                className="section-heading text-left wow fadeInUp"
                data-wow-delay="250ms"
              >
                <h2>Featured Properties</h2>
                <p>Suspendisse dictum enim sit amet libero</p>
              </div>

              <div
                className="single-featured-property mb-50 wow fadeInUp"
                data-wow-delay="500ms"
              >
                {/* Property Thumbnail */}
                <div className="property-thumb">
                  <img src="img/bg-img/feature5.jpg" alt="" />
                  <div className="tag">
                    <span>For Sale</span>
                  </div>
                  <div className="list-price">
                    <p>$945 679</p>
                  </div>
                </div>
                {/* Property Content */}
                <div className="property-content">
                  <h5>Town House in Los Angeles</h5>
                  <p className="location">
                    <img src="img/icons/location.png" alt="" />
                    Upper Road 3411, no.34 CA
                  </p>
                  <p>
                    Integer nec bibendum lacus. Suspendisse dictum enim sit amet
                    libero malesuada.
                  </p>
                  <div className="property-meta-data d-flex align-items-end justify-content-between">
                    <div className="new-tag">
                      <img src="img/icons/new.png" alt="" />
                    </div>
                    <div className="bathroom">
                      <img src="img/icons/bathtub.png" alt="" />
                      <span>2</span>
                    </div>
                    <div className="garage">
                      <img src="img/icons/garage.png" alt="" />
                      <span>2</span>
                    </div>
                    <div className="space">
                      <img src="img/icons/space.png" alt="" />
                      <span>120 sq ft</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ##### About Content Wrapper End ##### */}
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
      {/* ##### Meet The Team Area Start ##### */}
      <section className="meet-the-team-area section-padding-100-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
                <h2>Meet The Team</h2>
                <p>Suspendisse dictum enim sit amet libero</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {/* Single Team Member */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div
                className="single-team-member mb-100 wow fadeInUp"
                data-wow-delay="250ms"
              >
                {/* Team Member Thumb */}
                <div className="team-member-thumb">
                  <img src="img/bg-img/team1.jpg" alt="" />
                </div>
                {/* Team Member Info */}
                <div className="team-member-info">
                  <div className="section-heading">
                    <img src="img/icons/prize.png" alt="" />
                    <h2>Jeremy Scott</h2>
                    <p>Realtor</p>
                  </div>
                  <div className="address">
                    <h6>
                      <img src="img/icons/phone-call.png" alt="" /> +45 677
                      8993000 223
                    </h6>
                    <h6>
                      <img src="img/icons/envelope.png" alt="" />{" "}
                      office@template.com
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Team Member */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div
                className="single-team-member mb-100 wow fadeInUp"
                data-wow-delay="500ms"
              >
                {/* Team Member Thumb */}
                <div className="team-member-thumb">
                  <img src="img/bg-img/team2.jpg" alt="" />
                </div>
                {/* Team Member Info */}
                <div className="team-member-info">
                  <div className="section-heading">
                    <img src="img/icons/prize.png" alt="" />
                    <h2>Maria Williams</h2>
                    <p>Realtor</p>
                  </div>
                  <div className="address">
                    <h6>
                      <img src="img/icons/phone-call.png" alt="" /> +45 677
                      8993000 223
                    </h6>
                    <h6>
                      <img src="img/icons/envelope.png" alt="" />{" "}
                      office@template.com
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Team Member */}
            <div className="col-12 col-sm-6 col-lg-4">
              <div
                className="single-team-member mb-100 wow fadeInUp"
                data-wow-delay="750ms"
              >
                {/* Team Member Thumb */}
                <div className="team-member-thumb">
                  <img src="img/bg-img/team3.jpg" alt="" />
                </div>
                {/* Team Member Info */}
                <div className="team-member-info">
                  <div className="section-heading">
                    <img src="img/icons/prize.png" alt="" />
                    <h2>Patrick Joe</h2>
                    <p>Realtor</p>
                  </div>
                  <div className="address">
                    <h6>
                      <img src="img/icons/phone-call.png" alt="" /> +45 677
                      8993000 223
                    </h6>
                    <h6>
                      <img src="img/icons/envelope.png" alt="" />{" "}
                      office@template.com
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ##### Meet The Team Area End ##### */}
    </>
  );
}
