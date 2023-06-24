const mongoose = require("mongoose");
const serviceProducerModel = mongoose.Schema(
  {
    Name: { type: String },
    Rating: { speed:{
      type:mongoose.Types.Decimal128
      }},
    Description: { type: String, required: true },
    reportFlag: { type: Number },
    img: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("serviceProducer", serviceProducerModel);
