import { db } from "../db.js";

export const getMeetinguser = (req, res) => {
  const query1 =
    "SELECT a.*,b.*,c.* FROM meet_req a, property b, mst_dealer c where user_id=? and a.property_id=b.property_id and c.dealer_id=a.dealer_id and a.status=1";
  db.query(query1, [req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

export const updateMeeting = (req, res) => {
  const query = "UPDATE `mst_admin` SET `status`=? where admin_id=?";
  const values = [req.body.status];
  console.log(query);
  db.query(query, [...values, req.params.id], (err, data) => {
    if (err) return res.json(err);
    return res.json("Meeting accepted!!!");
  });
};
