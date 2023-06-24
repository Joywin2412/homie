const mongoose = require("mongoose");
const serviceTicketModel = mongoose.Schema(
  {
    Email: { type: String, required: true },
    Problem: { type: String, required: true },
    Status: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("serviceTicket", serviceTicketModel);
