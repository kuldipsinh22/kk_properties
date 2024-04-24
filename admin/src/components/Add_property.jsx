import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function Add_property() {
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
  const [bedrooms, setbedrooms] = useState("");
  const [bathrooms, setbathrooms] = useState("");
  const [sqft, setsqft] = useState("");
  const [type, settype] = useState("");

  const location1 = useLocation();
  const navigate = useNavigate();
  const id = location1.pathname.split("/")[2]
    ? location1.pathname.split("/")[2]
    : "";
  useEffect(() => {
    console.log(id);
    if (id) {
      getuser();
    }
  }, []);

  const getuser = async () => {
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
    setbedrooms(res.data.bedrooms);
    setbathrooms(res.data.bathrooms);
    setsqft(res.data.sqft);
  };

  const submitbtn = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("property_name", property_name);
    formData.append("property_type", property_type);
    formData.append("p_img", p_img);
    formData.append("description", description);
    formData.append("tags", tags);
    formData.append("status", status);
    formData.append("location", location);
    formData.append("dealer_id", dealer_id);
    formData.append("entry_date", entry_date);
    formData.append("update_date", update_date);
    formData.append("property_price", property_price);
    formData.append("type", type);
    formData.append("bedrooms", bedrooms);
    formData.append("bathrooms", bathrooms);
    formData.append("sqft", sqft);
    let res = "";
    console.log(formData);

    if (id) {
      res = await axios.put(
        "http://localhost:1122/kk/property/" + id,
        formData
      );
    } else {
      res = await axios.post("http://localhost:1122/kk/property", formData);
    }
    console.log(res.data);
    alert(res.data);
    navigate("/Property");
  };
  return (
    <div
      style={{ marginTop: "50px", marginLeft: "260px", marginRight: "20px" }}
    >
      <div class="row">
        <div class="col-12">
          <div class="card mb-4">
            <div class="card-header pb-0">
              <h3
                style={{
                  background: "linear-gradient(to right, black, grey)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Add property
              </h3>
              <p class="mb-0">Add property here</p>
              <form role="form">
                <label>Property Name</label>
                <div class="mb-3 col-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Propery Name"
                    aria-label="Name"
                    aria-describedby="Name-addon"
                    defaultValue={property_name}
                    onChange={(e) => setproperty_name(e.target.value)}
                  />
                </div>
                <label>Property image</label>
                <div class="mb-3 col-6">
                  <input
                    type="file"
                    class="form-control"
                    placeholder="Image"
                    defaultValue={p_img}
                    onChange={(e) => setp_img(e.target.files[0])}
                  />
                </div>
                <label>Property type</label>
                <div class="mb-3 col-6">
                  <select
                    name="status"
                    class="form-control"
                    onChange={(e) => setproperty_type(e.target.value)}
                  >
                    <option>Choose</option>

                    <option value="0">Land</option>
                    <option value="1">Residential</option>
                    <option value="2">Commercial</option>
                  </select>
                </div>
                <label>Description</label>
                <div class="mb-3 col-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Description"
                    aria-label="Description"
                    aria-describedby="Description.-addon"
                    defaultValue={description}
                    onChange={(e) => setdescription(e.target.value)}
                  />
                </div>

                <label>Bedrooms</label>
                <div class="mb-3 col-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Bedrooms"
                    aria-label="Bedrooms"
                    aria-describedby="Bedrooms.-addon"
                    defaultValue={bedrooms}
                    onChange={(e) => setbedrooms(e.target.value)}
                  />
                </div>

                <label>Bathrooms</label>
                <div class="mb-3 col-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Bathrooms"
                    aria-label="Bathrooms"
                    aria-describedby="Bathrooms.-addon"
                    defaultValue={bathrooms}
                    onChange={(e) => setbathrooms(e.target.value)}
                  />
                </div>

                <label>Sqft</label>
                <div class="mb-3 col-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Sqft"
                    aria-label="Sqft"
                    aria-describedby="Sqft.-addon"
                    defaultValue={sqft}
                    onChange={(e) => setsqft(e.target.value)}
                  />
                </div>

                <label>Tags</label>
                <div class="mb-3 col-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Tags"
                    aria-label="Tags"
                    aria-describedby="Tags.-addon"
                    defaultValue={tags}
                    onChange={(e) => settags(e.target.value)}
                  />
                </div>
                <label>Status</label>
                <div class="mb-3 col-6">
                  <select
                    name="status"
                    class="form-control"
                    onChange={(e) => setstatus(e.target.value)}
                  >
                    <option>Choose</option>

                    <option value="0">Inactive</option>
                    <option value="1">Active</option>
                  </select>
                </div>
                <label>Location</label>
                <div class="mb-3 col-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Location"
                    aria-label="Location"
                    aria-describedby="Location.-addon"
                    defaultValue={location}
                    onChange={(e) => setlocation(e.target.value)}
                  />
                </div>
                <label>Dealer id</label>
                <div class="mb-3 col-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Dealer id"
                    aria-label="Userid"
                    aria-describedby="Userid.-addon"
                    defaultValue={dealer_id}
                    onChange={(e) => setdealer_id(e.target.value)}
                  />
                </div>
                <label>Price</label>
                <div class="mb-3 col-6">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Price"
                    aria-label="Price"
                    aria-describedby="Price.-addon"
                    defaultValue={property_price}
                    onChange={(e) => setproperty_price(e.target.value)}
                  />
                </div>
                <label>
                  Type {"("}
                  Sell / Rent
                  {")"}
                </label>
                <div class="mb-3 col-6">
                  <select
                    name="status"
                    class="form-control"
                    onChange={(e) => settype(e.target.value)}
                  >
                    <option>Choose</option>

                    <option value="0">Rent</option>
                    <option value="1">Sell</option>
                  </select>
                </div>
                <div
                  class="text-center"
                  style={{
                    marginBottom: "20px",
                    marginRight: "1000px",
                    marginLeft: "10px",
                  }}
                >
                  <button
                    type="button"
                    class="btn bg-gradient-info w-100 mt-4 mb-0"
                    onClick={submitbtn}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
