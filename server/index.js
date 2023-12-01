const express = require("express");
const app = express();

const database = require("./config/database");
const cors = require("cors");

const generalPermitRoutes = require("./routes/GeneralPermit");
const userRoutes = require("./routes/User");
const formRoutes = require("./routes/Form");
const ReqDocsRoutes = require("./routes/RequiredDocs");
const confinedSpacePermit = require("./routes/confinedSpacePermit");
const permitToMove = require("./routes/permitToMove");
require("dotenv").config();
const PORT = process.env.PORT || 4000;

//database connect
database.connect();

//middleware
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Credentials", "true");
//     res.setHeader("Access-Control-Max-Age", "1800");
//     res.setHeader("Access-Control-Allow-Headers", "content-type");
//     res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
//     next();
// });

app.use("/api/v1", generalPermitRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", formRoutes);
app.use("/api/v1", ReqDocsRoutes);
app.use("/api/v1", confinedSpacePermit);
app.use("/api/v1", permitToMove);
//get routes

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "you server is up and running",
  });
});

app.listen(PORT, () => {
  console.log(`app is running at port ${PORT}`);
});
