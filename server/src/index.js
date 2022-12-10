const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config()
const cros = require("cors");
const blancesheet = require("./controller/balancesheetController");
const app = express();
app.use(express.json());
app.use(cros())
app.use("/",blancesheet)

app.listen(process.env.PORT, async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URL
    );
    console.log("sucessfully connected to DB");
  } catch (err) {
    console.log("failed to connected DB");
  }
});
