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
                  <h2>Featured Properties</h2>
                  <p>
                    Suspendisse dictum enim sit amet libero malesuada feugiat.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Single Featured Property */}
              <div className="col-12 col-md-6 col-xl-4">
                <div
                  className="single-featured-property mb-50 wow fadeInUp"
                  data-wow-delay="100ms"
                >
                  {/* Property Thumbnail */}
                  <div className="property-thumb">
                    <img src="img/bg-img/feature1.jpg" alt="" />
                    <div className="tag">
                      <span>For Sale</span>
                    </div>
                    <div className="list-price">
                      <p>$945 679</p>
                    </div>
                  </div>
                  {/* Property Content */}
                  <div className="property-content">
                    <h5>Villa in Los Angeles</h5>
                    <p className="location">
                      <img src="img/icons/location.png" alt="" />
                      Upper Road 3411, no.34 CA
                    </p>
                    <p>
                      Integer nec bibendum lacus. Suspendisse dictum enim sit
                      amet libero malesuada.
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
              {/* Single Featured Property */}
              <div className="col-12 col-md-6 col-xl-4">
                <div
                  className="single-featured-property mb-50 wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  {/* Property Thumbnail */}
                  <div className="property-thumb">
                    <img src="img/bg-img/feature2.jpg" alt="" />
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
                      Integer nec bibendum lacus. Suspendisse dictum enim sit
                      amet libero malesuada.
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
              {/* Single Featured Property */}
              <div className="col-12 col-md-6 col-xl-4">
                <div
                  className="single-featured-property mb-50 wow fadeInUp"
                  data-wow-delay="300ms"
                >
                  {/* Property Thumbnail */}
                  <div className="property-thumb">
                    <img src="img/bg-img/feature3.jpg" alt="" />
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
                      Integer nec bibendum lacus. Suspendisse dictum enim sit
                      amet libero malesuada.
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
              {/* Single Featured Property */}
              <div className="col-12 col-md-6 col-xl-4">
                <div
                  className="single-featured-property mb-50 wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  {/* Property Thumbnail */}
                  <div className="property-thumb">
                    <img src="img/bg-img/feature4.jpg" alt="" />
                    <div className="tag">
                      <span>For Sale</span>
                    </div>
                    <div className="list-price">
                      <p>$945 679</p>
                    </div>
                  </div>
                  {/* Property Content */}
                  <div className="property-content">
                    <h5>Villa in Los Angeles</h5>
                    <p className="location">
                      <img src="img/icons/location.png" alt="" />
                      Upper Road 3411, no.34 CA
                    </p>
                    <p>
                      Integer nec bibendum lacus. Suspendisse dictum enim sit
                      amet libero malesuada.
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
              {/* Single Featured Property */}
              <div className="col-12 col-md-6 col-xl-4">
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
                      Integer nec bibendum lacus. Suspendisse dictum enim sit
                      amet libero malesuada.
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
              {/* Single Featured Property */}
              <div className="col-12 col-md-6 col-xl-4">
                <div
                  className="single-featured-property mb-50 wow fadeInUp"
                  data-wow-delay="600ms"
                >
                  {/* Property Thumbnail */}
                  <div className="property-thumb">
                    <img src="img/bg-img/feature6.jpg" alt="" />
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
                      Integer nec bibendum lacus. Suspendisse dictum enim sit
                      amet libero malesuada.
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
              <h2>jeremy Scott</h2>
              <p>Realtor</p>
            </div>
            <p className="wow fadeInUp" data-wow-delay="500ms">
              Etiam nec odio vestibulum est mattis effic iturut magna.
              Pellentesque sit amet tellus blandit. Etiam nec odiomattis effic
              iturut magna. Pellentesque sit am et tellus blandit. Etiam nec
              odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut
              magna. Curabitur rhoncus auctor eleifend. Fusce venenatis diam
              urna, eu pharetra arcu varius ac. Etiam cursus turpis lectus, id
              iaculis risus tempor id. Phasellus fringilla nisl sed sem
              scelerisque, eget aliquam magna vehicula.
            </p>
            <div className="address wow fadeInUp" data-wow-delay="750ms">
              <h6>
                <img src="img/icons/phone-call.png" alt="" /> +45 677 8993000
                223
              </h6>
              <h6>
                <img src="img/icons/envelope.png" alt="" /> office@template.com
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
            <img src="img/bg-img/editor.jpg" alt="" />
          </div>
        </section>
        {/* ##### Editor Area End ##### */}
      </>
    </>
  );
}
