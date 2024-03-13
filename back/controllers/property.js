import { db } from "../db.js";

export const getproperties = (req, res) => {
  const query1 =
    "SELECT a.*, b.* FROM property a, mst_dealer b where a.dealer_id = b.dealer_id";
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getproperty = (req, res) => {
  const query = "select * from property where property_id=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deleteproperty = (req, res) => {
  const query = "DELETE FROM property where property_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("property has been deleted");
  });
};

export const insertproperty = (req, res) => {
  const query =
    "INSERT INTO property(`property_name`, `property_type`, `p_img`, `description`, `tags`, `location`, `dealer_id`, `status`, `entry_date`, `property_price`, `type`) values(?)";
  const date = new Date();
  const values = [
    req.body.property_name,
    req.body.property_type || 1,
    req.file?.filename,
    req.body.description,
    req.body.tags,
    req.body.location,
    req.body.dealer_id,
    req.body.status || 0,
    date,
    req.body.property_price,
    req.body.type || 1,
  ];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New property has been added");
  });
};

export const updateproperty = (req, res) => {
  const query =
    "UPDATE `property` SET `property_name`=?, `property_type`=?, `p_img`=?, `description`=?, `tags`=?, `location`=?, `dealer_id`=?, `status`=?, `update_date`=?, `property_price`=?, `type`=? where property_id=?";
  const values = [
    req.body.property_name,
    req.body.property_type,
    req.file?.filename || req.body.p_img,
    req.body.description,
    req.body.tags,
    req.body.location,
    req.body.dealer_id,
    req.body.status || 0,
    new Date(),
    req.body.property_price,
    req.body.type,
  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("property data has been updated");
  });
};
