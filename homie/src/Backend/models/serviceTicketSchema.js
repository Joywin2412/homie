const mongoose = require("mongoose");
const serviceTicketModel = mongoose.Schema(
  {
    Email: { type: String },
    Problem: { type: String, required: true },
    Status: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("serviceTicket", serviceTicketModel);
// will add email after authentication