import React from "react";

export default function Property() {
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
                <h3 className="breadcumb-title">Listings</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ##### Breadcumb Area End ##### */}

      {/* ##### Listing Content Wrapper Area Start ##### */}
      <section className="listings-content-wrapper section-padding-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="listings-top-meta d-flex justify-content-between mb-100">
                <div className="view-area d-flex align-items-center">
                  <span>View as:</span>
                  <div className="grid_view ml-15">
                    <a href="#" className="active">
                      <i className="fa fa-th" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="list_view ml-15">
                    <a href="#">
                      <i className="fa fa-th-list" aria-hidden="true" />
                    </a>
                  </div>
                </div>
                <div className="order-by-area d-flex align-items-center">
                  <span className="mr-15">Order by:</span>
                  <select>
                    <option selected="">Default</option>
                    <option value={1}>Newest</option>
                    <option value={2}>Sales</option>
                    <option value={3}>Ratings</option>
                    <option value={3}>Popularity</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Single Featured Property */}
            <div className="col-12 col-md-6 col-xl-4">
              <div className="single-featured-property mb-50">
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
            {/* Single Featured Property */}
            <div className="col-12 col-md-6 col-xl-4">
              <div className="single-featured-property mb-50">
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
            {/* Single Featured Property */}
            <div className="col-12 col-md-6 col-xl-4">
              <div className="single-featured-property mb-50">
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
            {/* Single Featured Property */}
            <div className="col-12 col-md-6 col-xl-4">
              <div className="single-featured-property mb-50">
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
            {/* Single Featured Property */}
            <div className="col-12 col-md-6 col-xl-4">
              <div className="single-featured-property mb-50">
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
            {/* Single Featured Property */}
            <div className="col-12 col-md-6 col-xl-4">
              <div className="single-featured-property mb-50">
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
            {/* Single Featured Property */}
            <div className="col-12 col-md-6 col-xl-4">
              <div className="single-featured-property mb-50">
                {/* Property Thumbnail */}
                <div className="property-thumb">
                  <img src="img/bg-img/feature7.jpg" alt="" />
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
            {/* Single Featured Property */}
            <div className="col-12 col-md-6 col-xl-4">
              <div className="single-featured-property mb-50">
                {/* Property Thumbnail */}
                <div className="property-thumb">
                  <img src="img/bg-img/feature8.jpg" alt="" />
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
            {/* Single Featured Property */}
            <div className="col-12 col-md-6 col-xl-4">
              <div className="single-featured-property mb-50">
                {/* Property Thumbnail */}
                <div className="property-thumb">
                  <img src="img/bg-img/feature9.jpg" alt="" />
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
          <div className="row">
            <div className="col-12">
              <div className="south-pagination d-flex justify-content-end">
                <nav aria-label="Page navigation">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link active" href="#">
                        01
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        02
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        03
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ##### Listing Content Wrapper Area End ##### */}
    </>
  );
}
