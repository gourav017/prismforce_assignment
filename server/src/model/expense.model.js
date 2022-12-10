const mongoose = require("mongoose");

const expenceDataSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  startDate: { type: String, required: true },
  
});

const expenceDataModel = mongoose.model("expenceData",expenceDataSchema)

module.exports = expenceDataModel;

