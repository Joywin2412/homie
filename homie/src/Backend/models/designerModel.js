const mongoose = require("mongoose");
const designerModel = mongoose.Schema(
  {
    Name: { type: String },
    Email: { type: String, unique: true, required: true },
    problem:{type: String},
    rating:{type:Number}
  },
  { timestamps: true }
);
module.exports = mongoose.model("designer", designerModel);