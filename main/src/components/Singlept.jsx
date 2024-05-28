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
  const [acc_name, setacc_name] = useState("");
  const [full_name, setfull_name] = useState("");
  const [contact, setcontact] = useState("");
  const [img, setimages] = useState([]);
  const [dealer_email, setdealer_email] = useState("");
  const [user_id, setUser_id] = useState("");
  const [property_id, setProperty_id] = useState("");
  const [meet_date, setMeet_date] = useState("");

  const [auth, setAuth] = useState(sessionStorage.getItem("user"));

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
    setacc_name(res.data.acc_name);
    setfull_name(res.data.full_name);
    setcontact(res.data.contact);
    setimages(res.data.img);
    setdealer_email(res.data.dealer_email);
  };

  const submitbtn = async (e) => {
    const data = {
      user_id: auth,
      dealer_id: dealer_id,
      property_id: id,
      meet_date,
    };
    let res = "";
    res = await axios.post("http://localhost:1122/kk/sendmeet", data);
    console.log(res.data);
    alert(res.data);
    navigate("/Property");
  };
  return (
    <>
      {/* <section
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
      </section> */}
      {/* ##### Listings Content Area Start ##### */}
      <section className="listings-content-wrapper section-padding-100">
        <div className="container">
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
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="contact-realtor-wrapper">
                <div className="realtor-info">
                  <img
                    src={`http://localhost:1122/uploads/${img}`}
                    alt="Profile Picture"
                    style={{
                      borderRadius: "50%",
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                      marginTop: "10px",
                      marginLeft: "110px",
                    }}
                  />
                  <div className="realtor---info">
                    <h2>{full_name}</h2>
                    <p>{acc_name}</p>
                    <h6>
                      <img src="img/icons/phone-call.png" alt="" /> {contact}
                    </h6>
                    <h6>
                      <img src="img/icons/envelope.png" alt="" /> {dealer_email}
                    </h6>
                  </div>
                  <div className="realtor--contact-form">
                    <form action="#" method="post">
                      <div className="form-group">
                        <input
                          type="date"
                          className="form-control"
                          id="realtor-name"
                          onChange={(e) => setMeet_date(e.target.value)}
                        />
                      </div>

                      <div
                        className="listings-btn-groups"
                        style={{ marginTop: "50px" }}
                      >
                        <button
                          class="button-5"
                          role="button"
                          onClick={submitbtn}
                        >
                          Send meeting req.
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ##### Listings Content Area End ##### */}
    </>
  );
}
