const mongoose = require("mongoose");
const serviceModel = mongoose.Schema(
  {
    Email: { type: String, unique: true, required: true },
    problem:{type: String},
    status:{type: String}
  },
  { timestamps: true }
);
module.exports = mongoose.model("service", serviceModel);