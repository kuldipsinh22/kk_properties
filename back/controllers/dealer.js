import { db } from "../db.js";

export const getDealers = (req, res) => {
  const query1 = "SELECT * FROM mst_dealer";
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};



export const getDealer = (req, res) => {
  const query = "select * from mst_dealer where dealer_id=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deleteDealer = (req, res) => {
  const query = "DELETE FROM mst_dealer where dealer_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("dealer has been deleted");
  });
};

export const insertDealer = (req, res) => {
  const query =
    "INSERT INTO mst_dealer(`acc_name`, `full_name`, `img`, `contact`, `dealer_email`, `password`, `city`, `state`, `status`, `entry_date`) values(?)";
  const date = new Date();
  const values = [
    req.body.acc_name,
    req.body.full_name,
    req.file?.filename,
    req.body.contact,
    req.body.dealer_email,
    req.body.password,
    req.body.city,
    req.body.state,
    req.body.status || 1,
    date,
  ];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New dealer has been added");
  });
};

export const updateDealer = (req, res) => {
  const query =
    "UPDATE `mst_dealer` SET `acc_name`=?, `full_name`=?, `img`=?, `contact`=?, `dealer_email`=?, `password`=?, `city`=?, `state`=?, `status`=?, `update_date`=? where dealer_id=?";
  const values = [
    req.body.acc_name,
    req.body.full_name,
    req.file?.filename || req.body.img,
    req.body.contact,
    req.body.dealer_email,
    req.body.password,
    req.body.city,
    req.body.state,
    req.body.status || 1,
    new Date(),
  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("dealer data has been updated");
  });
};
