import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { TbBath } from "react-icons/tb";
import { MdOutlineBedroomChild } from "react-icons/md";
import { PiRectangle } from "react-icons/pi";

export default function Singlept() {
  const [property_name, setproperty_name] = useState("");
  const [p_img, setp_img] = useState("");
  const [property_type, setproperty_type] = useState("");
  const [description, setdescription] = useState("");
  const [tags, settags] = useState("");
  const [status, setstatus] = useState("");
  const [location, setlocation] = useState("");
  const [dealer_id, setdealer_id] = useState("");
  const [entry_date, setentry_date] = useState("");
  const [update_date, setupdate_date] = useState("");
  const [property_price, setproperty_price] = useState("");
  const [type, settype] = useState("");

  const location1 = useLocation();
  const navigate = useNavigate();
  const id = location1.pathname.split("/")[2]
    ? location1.pathname.split("/")[2]
    : "";
  useEffect(() => {
    console.log(id);
    if (id) {
      getProperty();
    }
  }, []);
  const getProperty = async () => {
    const url = "http://localhost:1122/kk/property/" + id;
    console.log(url);
    const res = await axios.get(url);
    console.log(res.data);
    setproperty_name(res.data.property_name);
    setproperty_type(res.data.property_type);
    setp_img(res.data.p_img);
    setdescription(res.data.description);
    settags(res.data.tags);
    setstatus(res.data.status);
    setlocation(res.data.location);
    setdealer_id(res.data.dealer_id);
    setentry_date(res.data.entry_date);
    setupdate_date(res.data.update_date);
    setproperty_price(res.data.property_price);
    settype(res.data.type);
  };
  return (
    <>
      {/* ##### Breadcumb Area Start ##### */}
      {/* <section
        className="breadcumb-area bg-img"
        style={{ backgroundImage: "url(img/bg-img/hero1.jpg)" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="breadcumb-content">
                <h3 className="breadcumb-title">Property</h3>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* ##### Breadcumb Area End ##### */}
      {/* ##### Listings Content Area Start ##### */}
      <section className="listings-content-wrapper section-padding-100">
        <div className="container">
          {/* <div className="row">
            <div className="col-12">
              <div className="">
                Single Slide
                <img src="img/bg-img/hero5.jpg" alt="" />
              </div>
            </div>
          </div> */}
          <div>
            <img
              src={`http://localhost:1122/uploads/${p_img}`}
              alt=""
              style={{
                height: "500px",
                width: "100%",
                objectFit: "cover",
                marginTop: "50px",
                borderRadius: "10px",
              }}
            />
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <div className="listings-content">
                {/* Price */}
                <div className="list-price">
                  <p>Rs. {property_price}</p>
                </div>
                <h5>{property_name}</h5>
                <p className="location">
                  <img src="img/icons/location.png" alt="" />
                  {location}
                </p>
                <p>{description}</p>
                {/* Meta */}
                <div className="property-meta-data d-flex align-items-end">
                  <div className="new-tag">
                    <img src="img/icons/new.png" alt="" />
                  </div>
                  <div className="bathroom">
                    <TbBath size={20} color="#947054" />
                    <span>2</span>
                  </div>
                  <div className="garage">
                    <MdOutlineBedroomChild size={20} color="#947054" />
                    <span>2</span>
                  </div>
                  <div className="space">
                    <PiRectangle size={20} color="#947054" />
                    <span>120 sq ft</span>
                  </div>
                </div>
                {/* Core Features */}
                <ul className="listings-core-features d-flex align-items-center">
                  <li>
                    <i className="fa fa-check" aria-hidden="true" /> Gated
                    Community
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true" /> Automatic
                    Sprinklers
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true" /> Fireplace
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true" /> Window
                    Shutters
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true" /> Ocean Views
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true" /> Heated
                    Floors
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true" /> Heated
                    Floors
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true" /> Private
                    Patio
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true" /> Window
                    Shutters
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true" /> Fireplace
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true" /> Beach
                    Access
                  </li>
                  <li>
                    <i className="fa fa-check" aria-hidden="true" /> Rooftop
                    Terrace
                  </li>
                </ul>
                {/* Listings Btn Groups */}
                <div className="listings-btn-groups">
                  <a href="#" className="btn south-btn">
                    See Floor plans
                  </a>
                  <a href="#" className="btn south-btn active">
                    calculate mortgage
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="contact-realtor-wrapper">
                <div className="realtor-info">
                  <img src="img/bg-img/listing.jpg" alt="" />
                  <div className="realtor---info">
                    <h2>Jeremy Scott</h2>
                    <p>Realtor</p>
                    <h6>
                      <img src="img/icons/phone-call.png" alt="" /> +45 677
                      8993000 223
                    </h6>
                    <h6>
                      <img src="img/icons/envelope.png" alt="" />{" "}
                      office@template.com
                    </h6>
                  </div>
                  <div className="realtor--contact-form">
                    <form action="#" method="post">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="realtor-name"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control"
                          id="realtor-number"
                          placeholder="Your Number"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="enumber"
                          className="form-control"
                          id="realtor-email"
                          placeholder="Your Mail"
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          name="message"
                          className="form-control"
                          id="realtor-message"
                          cols={30}
                          rows={10}
                          placeholder="Your Message"
                          defaultValue={""}
                        />
                      </div>
                      <button type="submit" className="btn south-btn">
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Listing Maps */}
          <div className="row">
            <div className="col-12">
              <div className="listings-maps mt-100">
                <div id="googleMap" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ##### Listings Content Area End ##### */}
    </>
  );
}
