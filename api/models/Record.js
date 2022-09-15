const mongoose = require("mongoose");

const RecordSchema = new mongoose.Schema(
  {
    visits: {
      type: String,
      required: true,
    },
    period_date: {
      type: String,
      max: 500,
    },
    period_type: {
      type: String,
      enum : ["LQ","LM","LTM"],
    },
    page: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Record", RecordSchema);
