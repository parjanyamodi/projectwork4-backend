const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
  userId: { type: String, unique: true },
  Name: String,
  Age: Number,
  Gender: String,
  ReportYear: Number,
  SerumIron: Number,
  SerumFerritin: Number,
  SerumZn: Number,
  TSH: Number,
  AbnormalHairShaft: Number,
  Dandruff: Number,
  Hairfall: Number,
});
const Data = mongoose.model("reports", dataSchema);

module.exports = Data;
