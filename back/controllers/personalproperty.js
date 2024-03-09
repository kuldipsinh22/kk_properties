import { db } from "../db.js";

export const getproperty = (req, res) => {
  const query = "select * from property where dealer_id=?";

  db.query(query, (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};
