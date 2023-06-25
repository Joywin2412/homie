const mongoose = require("mongoose");
const feedbackModel = mongoose.Schema(
  {
    Name: { type: String },
    Likes: { type: Number },
    Comment: { type: String, required: true },
    ServiceProducer : {type:String},
    reportFlag: { type: Number },
  },
  { timestamps: true }
);
module.exports = mongoose.model("feedback", feedbackModel);
