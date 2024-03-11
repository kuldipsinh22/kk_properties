import { db } from "../db.js";

export const getProperty = (req, res) => {
  const query = "select * from property where dealer_id=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const getproperties = (req, res) => {
  const query = "select * from property";

  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};