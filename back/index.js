import express from "express";
import cors from "cors";
import router from "./models/r_admin.js";
import router1 from "./models/r_user.js";
import router2 from "./models/r_property.js";
import router4 from "./models/r_login.js";
import router5 from "./models/r_userlogin.js";
import router6 from "./models/r_dealer.js";
import router7 from "./models/r_pProperty.js";
import router8 from "./models/r_meeting.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use("/kk/admin", router);
app.use("/kk/user", router1);
app.use("/kk/property", router2);
app.use("/kk/login", router4);
app.use("/kk/userlogin", router5);
app.use("/kk/dealer", router6);
app.use("/kk/pproperty", router7);
app.use("/kk/meeting", router8);

app.listen(1122, () => {
  console.log("Server is running on 1122 port...");
});
