const mongoose = require("mongoose");
const serviceTicketModel = mongoose.Schema(
  {
    Email: { type: String },
    Problem: { type: String, required: true },
    ServiceProducer : {type:String , required : true},
    Status: { type: String, required: true },
    Response: {type:String},
  },
  { timestamps: true }
);
module.exports = mongoose.model("serviceTicket", serviceTicketModel);
// will add email after authentication