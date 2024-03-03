import { json } from "express";
import { db } from "../db.js";

export const getUser = (req, res) => {
  const contact = req.query.contact;
  const password = req.query.password;

  const query =
    "SELECT user_id FROM `mst_user` WHERE contact='" +
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
          console.log(data[0].user_id);
          return res.json(data[0].user_id);
        }
      }
    });
  } catch (error) {
    return res.json(0);
  }
};
