import { db } from "../db.js";

export const getusers = (req, res) => {
  const query1 = "SELECT * FROM mst_user";
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const getuser = (req, res) => {
  const query = "select * from mst_user where user_id=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const deleteuser = (req, res) => {
  const query = "DELETE FROM mst_user where user_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("user has been deleted");
  });
};

export const insertuser = (req, res) => {
  const query =
    "INSERT INTO mst_user(`user_name`, `img`, `contact`, `user_email`, `password`, `status`, `entry_date`) values(?)";
  const date = new Date();
  const values = [
    req.body.user_name,
    req.file?.filename,
    req.body.contact,
    req.body.user_email,
    req.body.password,
    req.body.status || 1,
    date,
  ];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("New user has been added");
  });
};

export const updateuser = (req, res) => {
  const query =
    "UPDATE `mst_user` SET `user_name`=?, `img`=?, `contact`=?, `user_email`=?, `password`=?, `status`=?, `update_date`=? where user_id=?";
  const values = [
    req.body.user_name,
    req.file?.filename || req.body.img,
    req.body.contact,
    req.body.user_email,
    req.body.password,
    req.body.status,
    new Date(),
  ];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("user data has been updated");
  });
};
