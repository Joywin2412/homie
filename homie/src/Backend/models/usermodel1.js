const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const userModel = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    phone: { type: String, unique: true },
  },
  { timestamps: true }
);
userModel.methods.matchPassword = async function (enteredPassword) {
  console.log(enteredPassword);
  return await bcrypt.compare(enteredPassword, this.Password);
};
userModel.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.Password = await bcrypt.hash(this.Password, salt);
});
const User = mongoose.model("user", userModel);
module.exports = mongoose.model("user", userModel);
