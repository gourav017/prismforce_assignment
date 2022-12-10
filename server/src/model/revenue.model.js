const mongoose = require("mongoose");

const revenueDataSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  startDate: { type: String, required: true },
  
});

const revenueDataModel = mongoose.model("revenueData",revenueDataSchema)

module.exports = revenueDataModel;

