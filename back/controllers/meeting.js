import { db } from "../db.js";

export const getMeetinguser = (req, res) => {
  const query1 =
    "SELECT a.*,b.*,c.* FROM meet_req a, property b, mst_dealer c where user_id=? and a.property_id=b.property_id and c.dealer_id=a.dealer_id";
  db.query(query1, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const getMeetingdealer = (req, res) => {
  const query = "select * from meet_req where dealer_id=?";

  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
};

export const getMeetings = (req, res) => {
  const query1 = "SELECT * FROM meet_req";
  db.query(query1, (err, data) => {
    if (err) {
      return res.json(err);
    } else {
      return res.json(data);
    }
  });
};

export const deleteMeeting = (req, res) => {
  const query = "DELETE FROM meet_req where mr_id=?";
  db.query(query, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("admin has been deleted");
  });
};

export const insertMeeting = (req, res) => {
  const query =
    "INSERT INTO meet_req(`user_id`, `property_id`, `dealer_id`, `meet_date`, `entry_date`, `status`) values(?)";
  const date = new Date();
  const values = [
    req.body.user_id,
    req.body.property_id,
    req.body.dealer_id,
    req.body.meet_date,
    date,
    req.body.status || 0,
  ];
  console.log(query);
  console.log(values);
  db.query(query, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("Your meeting request has been sended");
  });
};
