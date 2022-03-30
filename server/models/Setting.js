const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const settingSchema = mongoose.Schema({
  mode: {
    type: String,
    default: "update",
  },
  fontSize: {
    type: Number,
    default: 1,
  },
  background: {
    type: String,
    default: "#fafafa",
  },
});

const Setting = mongoose.model("Setting", settingSchema);
module.exports = { Setting };
