import { json } from "express";
import { db } from "../db.js";

export const getAdmin = (req, res) => {
  const role_id = req.query.role_id;
  const contact = req.query.contact;
  const password = req.query.password;
  console.log("role_id", role_id);

  if (role_id == 1) {
    const query =
      "SELECT admin_id FROM `mst_admin` WHERE contact='" +
      contact +
      "' AND password='" +
      password +
      "'";

    console.log(query);

    try {
      db.query(query, (err, data) => {
        console.log(data.length);

        if (err) return res.json(err);
        else {
          if (data.length == 0) return res.json(0);
          else {
            console.log(data[0].admin_id);
            return res.json(data[0].admin_id);
          }
        }
      });
    } catch (error) {
      return res.json(0);
    }
  } else {
    const query =
      "SELECT dealer_id FROM `mst_dealer` WHERE contact='" +
      contact +
      "' AND password='" +
      password +
      "'";

    console.log(query);

    try {
      db.query(query, (err, data) => {
        console.log(data.length);

        if (err) return res.json(err);
        else {
          if (data.length == 0) return res.json(0);
          else {
            console.log(data[0].dealer_id);
            return res.json(data[0].dealer_id);
          }
        }
      });
    } catch (error) {
      return res.json(0);
    }
  }
};
