import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { MdOutlineBedroomChild } from "react-icons/md";
import { TbBath } from "react-icons/tb";
import { PiRectangle } from "react-icons/pi";

export default function Property() {
  const [properties, setProperties] = useState([]);
  let i = 1;
  useEffect(() => {
    getProperties();
  }, []);
  const getProperties = async () => {
    const res = await axios.get("http://localhost:1122/kk/property");
    setProperties(res.data);
    console.log(res.data);
  };
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
            {/* Featured Property */}
            {properties.map((properties) => (
              <div className="col-12 col-md-6 col-xl-4">
                <div className="single-featured-property mb-50">
                  {/* Property Thumbnail */}
                  <div className="property-thumb">
                    {/* donee */}
                    <img
                      src={`http://localhost:1122/uploads/${properties.p_img}`}
                      alt=""
                      style={{
                        height: "250px",
                        width: "100%",
                        objectFit: "cover",
                      }}
                    />
                    {/* done */}
                    {properties.type == 1 ? (
                      <>
                        <div className="tag">
                          <span>For Sale</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="tag">
                          <span>For Rent</span>
                        </div>
                      </>
                    )}

                    {/* donee */}
                    <div className="list-price">
                      <p>Rs. {properties.property_price}</p>
                    </div>
                  </div>
                  {/* donee */}
                  {/* Property Content */}
                  <div className="property-content">
                    <h5>{properties.property_name}</h5>
                    <p className="location">
                      <img src="img/icons/location.png" alt="" />
                      {properties.location}, {properties.city},{" "}
                      {properties.state}.
                    </p>
                    <p>{properties.description}</p>
                    <div className="property-meta-data d-flex align-items-end justify-content-between">
                      <div className="new-tag">
                        <img src="img/icons/new.png" alt="" />
                      </div>
                      <div className="bathroom">
                        <TbBath size={20} color="#947054" />
                        <span>{properties.bathrooms}</span>
                      </div>
                      <div className="Badrooms">
                        <MdOutlineBedroomChild size={20} color="#947054" />
                        <span>{properties.bedrooms}</span>
                      </div>
                      <div className="space">
                        <PiRectangle size={20} color="#947054" />
                        <span>{properties.sqft} sq ft</span>
                      </div>
                    </div>
                    {/* req for meet button */}
                    <Link to={`/Singlept/` + properties.property_id}>
                      <div
                        style={{
                          display: "inline-block",
                          position: "relative",
                          overflow: "hidden",
                          marginTop: "20px",
                          marginLeft: "80px",
                          borderRadius: "20px",
                        }}
                      >
                        <button
                          style={{
                            padding: "10px 20px",
                            border: "none",
                            outline: "none",
                            backgroundImage:
                              "linear-gradient(135deg, #000000, #947054)",
                            color: "white",
                            fontFamily: "Arial, sans-serif",
                            fontSize: 16,
                            borderRadius: 20,
                            cursor: "pointer",
                            position: "relative",
                            zIndex: 1,
                            overflow: "hidden",
                          }}
                        >
                          Learn More
                        </button>
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background:
                              "linear-gradient(135deg, #000000, #947054)",
                            mixBlendMode: "screen",
                            pointerEvents: "none",
                          }}
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: "300%",
                            height: "300%",
                            background:
                              "radial-gradient(circle, #000000, #947054, #000000)",
                            transform: "translate(-50%, -50%)",
                            mixBlendMode: "lighten",
                            animation: "waves 2s infinite",
                          }}
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
