const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalSchema = mongoose.Schema({
  writer: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  name: { type: String, default: undefined },
  year: { type: String, default: "0" },
  month: { type: String, default: "0" },
  date: { type: String, default: "0" },
  time: { type: Date, default: new Date() },
  journal: {
    type: String,
  },
  emotion: {
    type: String,
    default: "soso",
  },
  like: {
    type: Boolean,
    default: false,
  },
});

const Journal = mongoose.model("Journal", journalSchema);
module.exports = { Journal };
