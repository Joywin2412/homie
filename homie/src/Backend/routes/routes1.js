const express = require("express");
const jwt = require("jsonwebtoken");
const {
  registerUser,
  authUser,
  profileUser,
  getServiceTickets,
  addServiceTickets,
  getFeedback,
  addFeedback
} = require("../controllers/userControllers");
// const jwt = require();
const router = express.Router();

function AuthenticateUser(req, res, next) {
  next();
  // console.log(req.url);
  // try {
  //   const { email } = req.body;
  //   const token = req.headers.authorization.split(" ")[1];
  //   const decoded = jwt.verify(token, process.env.JWT_SECRET, { id: email });
  //   next();
  // } catch (err) {
  //   console.log(req.url);
  //   console.log(err);
  //   return res.status(401).send({ message: "Invalid token" });
  // }
}
router.route("/").post(registerUser);
router.post("/login", authUser);
router.get("/profile/:id", AuthenticateUser, profileUser);
router.get("/getServiceTickets",AuthenticateUser,getServiceTickets);
router.post("/addServiceTickets",AuthenticateUser,addServiceTickets);
router.get("/getFeedback",AuthenticateUser,getFeedback);
router.post("/addFeedback",AuthenticateUser,addFeedback);

module.exports = router;
